// Credits: https://codesandbox.io/p/sandbox/radix-toast-stack-dpfx5f

import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { IconButton } from "@/components/icon-button";
import { Text } from "@/components/text";
import {
  checkmark,
  error,
  toastClose,
  toastInner,
  toastRoot,
  toastViewport,
} from "@/theme/styles/toaster.css";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import * as React from "react";

type Toast = {
  title?: string;
  description?: string;
  status: "default" | "error" | "success";
  action?: React.ReactNode;
} & ToastPrimitives.ToastProps;

type AddToastPayload = Omit<Toast, "status">;

type ToasterContextProps = ((payload: AddToastPayload) => void) & {
  error: (payload: AddToastPayload) => void;
  success: (payload: AddToastPayload) => void;
};

const defaultToaster: ToasterContextProps = Object.assign(() => {}, {
  success: () => {},
  error: () => {},
});

export const ToasterContext = React.createContext(defaultToaster);

type ToastContextImplProps = {
  toastElementsMapRef: React.RefObject<Map<string, HTMLLIElement> | null>;
  sortToasts: () => void;
};

const toastElementsMapRef = React.createRef<Map<string, HTMLLIElement>>();

const defaultToastImpl: ToastContextImplProps = {
  toastElementsMapRef,
  sortToasts: () => {},
};

const ToastContextImpl = React.createContext(defaultToastImpl);

const ANIMATION_OUT_DURATION = 350;

export const Toaster = ({
  children,
  ...props
}: ToastPrimitives.ToastProviderProps) => {
  const [toasts, setToasts] = React.useState<Map<string, Toast>>(new Map());
  const toastElementsMapRef = React.useRef<Map<string, HTMLLIElement>>(
    new Map(),
  );
  const viewportRef = React.useRef<HTMLOListElement>(null);

  const sortToasts = React.useCallback(() => {
    const toastElements = Array.from(toastElementsMapRef.current).reverse();
    const heights: number[] = [];

    toastElements.forEach(([, toast], index) => {
      if (!toast) return;
      const height = toast.clientHeight;
      heights.push(height);
      const frontToastHeight = heights[0];
      toast.setAttribute("data-front", `${index === 0}`);
      toast.setAttribute("data-hidden", `${index > 2}`);
      toast.style.setProperty("--index", `${index}`);
      toast.style.setProperty("--height", `${height}px`);
      toast.style.setProperty("--front-height", `${frontToastHeight}px`);
      const hoverOffsetY = heights
        .slice(0, index)
        .reduce((res, next) => (res += next), 0);
      toast.style.setProperty("--hover-offset-y", `-${hoverOffsetY}px`);
    });
  }, []);

  const handleAddToast = React.useCallback((toast: Toast) => {
    setToasts((currentToasts) => {
      const newMap = new Map(currentToasts);
      newMap.set(String(Date.now()), { ...toast, open: true });

      return newMap;
    });
  }, []);

  const handleRemoveToast = React.useCallback((key: string) => {
    setToasts((currentToasts) => {
      const newMap = new Map(currentToasts);
      newMap.delete(key);

      return newMap;
    });
  }, []);

  const handleDispatchDefault = React.useCallback(
    (payload: AddToastPayload) =>
      handleAddToast({ ...payload, status: "default" }),
    [handleAddToast],
  );

  const handleDispatchSuccess = React.useCallback(
    (payload: AddToastPayload) =>
      handleAddToast({ ...payload, status: "success" }),
    [handleAddToast],
  );

  const handleDispatchError = React.useCallback(
    (payload: AddToastPayload) =>
      // default duration of 10 mins for `status: "error"`.
      handleAddToast({ duration: 60 * 1000 * 10, ...payload, status: "error" }),
    [handleAddToast],
  );

  React.useEffect(() => {
    const viewport = viewportRef.current;

    if (viewport) {
      const handleFocus = () => {
        toastElementsMapRef.current.forEach((toast) => {
          toast.setAttribute("data-hovering", "true");
        });
      };

      // @ts-expect-error TODO: get the correct type
      const handleBlur = (event) => {
        if (!viewport.contains(event.target) || viewport === event.target) {
          toastElementsMapRef.current.forEach((toast) => {
            toast.setAttribute("data-hovering", "false");
          });
        }
      };

      viewport.addEventListener("pointermove", handleFocus);
      viewport.addEventListener("pointerleave", handleBlur);
      viewport.addEventListener("focusin", handleFocus);
      viewport.addEventListener("focusout", handleBlur);

      return () => {
        viewport.removeEventListener("pointermove", handleFocus);
        viewport.removeEventListener("pointerleave", handleBlur);
        viewport.removeEventListener("focusin", handleFocus);
        viewport.removeEventListener("focusout", handleBlur);
      };
    }
  }, []);

  const toastApi = React.useMemo(
    () =>
      Object.assign(handleDispatchDefault, {
        success: handleDispatchSuccess,
        error: handleDispatchError,
      }),
    [handleDispatchDefault, handleDispatchSuccess, handleDispatchError],
  );

  return (
    <ToasterContext.Provider value={toastApi}>
      <ToastContextImpl.Provider
        value={React.useMemo(
          () => ({
            toastElementsMapRef,
            sortToasts,
          }),
          [sortToasts],
        )}
      >
        <ToastPrimitives.Provider {...props}>
          {children}
          {Array.from(toasts).map(([key, toast]) => (
            <Toast
              key={key}
              id={key}
              toast={toast}
              onOpenChange={(open) => {
                if (!open) {
                  toastElementsMapRef.current.delete(key);
                  sortToasts();

                  if (!open) {
                    setTimeout(() => {
                      handleRemoveToast(key);
                    }, ANIMATION_OUT_DURATION);
                  }
                }
              }}
            />
          ))}
          <ToastPrimitives.Viewport
            ref={viewportRef}
            className={toastViewport}
          />
        </ToastPrimitives.Provider>
      </ToastContextImpl.Provider>
    </ToasterContext.Provider>
  );
};

const Toast = (props: ToastPrimitives.ToastProps & { toast: Toast }) => {
  const { onOpenChange, toast, id, ...toastProps } = props;
  const ref = React.useRef<HTMLLIElement>(null);
  const context = React.useContext(ToastContextImpl);
  const { sortToasts, toastElementsMapRef } = context;
  const toastElementsMap = toastElementsMapRef.current;

  React.useLayoutEffect(() => {
    if (ref.current) {
      toastElementsMap?.set(id as string, ref.current);
      sortToasts();
    }
  }, [id, sortToasts, toastElementsMap]);

  return (
    <ToastPrimitives.Root
      {...toastProps}
      ref={ref}
      type={toast.type}
      duration={toast.duration}
      className={toastRoot}
      onOpenChange={onOpenChange}
    >
      <div className={toastInner} data-status={toast.status}>
        <ToastStatusIcon status={toast.status} />
        <ToastPrimitives.Title asChild style={{ gridArea: "title" }}>
          <Heading level="6">{toast.title}</Heading>
        </ToastPrimitives.Title>
        <ToastPrimitives.Description
          asChild
          style={{ gridArea: "description" }}
        >
          <Text color="subtle" size="2">
            {toast.description}
          </Text>
        </ToastPrimitives.Description>
        {toast.action}
        <ToastPrimitives.Close
          aria-label="Close"
          asChild
          className={toastClose}
        >
          <IconButton variant="outline">
            <Cross2Icon />
          </IconButton>
        </ToastPrimitives.Close>
      </div>
    </ToastPrimitives.Root>
  );
};

const ToastStatusIcon = ({ status }: { status: Toast["status"] }) => {
  return status !== "default" ? (
    <div style={{ gridArea: "icon", alignSelf: "start" }}>
      {status === "success" && <CheckmarkIcon />}
      {status === "error" && <ErrorIcon />}
    </div>
  ) : null;
};

const ErrorIcon = () => <div aria-hidden className={error} />;
const CheckmarkIcon = () => <div aria-hidden className={checkmark} />;

export const ToastAction = ({
  ...props
}: Omit<ToastPrimitives.ToastActionProps, "asChild">) => {
  return (
    <ToastPrimitives.Action
      {...props}
      style={{ gridArea: "action", ...props.style }}
      asChild
    >
      <Button size="1" variant="outline">
        {props.children}
      </Button>
    </ToastPrimitives.Action>
  );
};
