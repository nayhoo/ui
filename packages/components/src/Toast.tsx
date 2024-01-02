import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { styled, keyframes } from "@stitches/react";
import { hide } from "./keyframes";
import { Flex } from "./Flex";
import { CrossCircledIcon } from "@radix-ui/react-icons";

type Toast = {
  action?: JSX.Element;
  description?: string;
  error?: boolean;
  title?: string;
};

type ToastState = ({ action, description, title }: Toast) => void;

const defaultToastState: ToastState = () => {
  // eslint-disable-next-line no-console
  console.error(
    "Error: The 'useToast' hook is being used outside of the Toast provider. " +
      "Make sure to wrap your application with Toast to enable toast functionality."
  );
};

const ToastContext = React.createContext(defaultToastState);

export const useToast = () => React.useContext(ToastContext);

export const Toast = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback(
    ({ action, description, error, title }: Toast) => {
      setToasts([{ action, description, error, title }, ...toasts]);
    },
    [toasts]
  );

  return (
    <ToastContext.Provider value={toast}>
      {children}

      <ToastPrimitives.Provider>
        {toasts.map(({ action, description, error, title }) => (
          <ToastRoot defaultOpen error={error}>
            <Flex direction="column" gap="2">
              <Flex align="center" gap="2">
                {error && <StyledCrossCircledIcon />}
                {title && <ToastTitle>{title}</ToastTitle>}
              </Flex>
              {description && <ToastDescription>{description}</ToastDescription>}
            </Flex>
            {action}
          </ToastRoot>
        ))}

        <ToastViewport />
      </ToastPrimitives.Provider>
    </ToastContext.Provider>
  );
};

const VIEWPORT_PADDING = 25;

const ToastViewport = styled(ToastPrimitives.Viewport, {
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  listStyle: "none",
  margin: 0,
  maxWidth: "100vw",
  outline: "none",
  padding: VIEWPORT_PADDING,
  position: "fixed",
  right: 0,
  width: 390,
  zIndex: 2147483647,
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const ToastRoot = styled(ToastPrimitives.Root, {
  alignItems: "center",
  backgroundColor: "$surface",
  borderRadius: "$2",
  boxShadow: "$colors$shadow 0px 10px 38px -10px, $colors$shadow 0px 10px 20px -15px",
  columnGap: "$3",
  display: "grid",
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: "auto max-content",
  padding: "$3",

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },
  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  variants: {
    error: {
      true: {
        boxShadow: "inset 0px 0px 0px 1px $colors$error",
      },
    },
  },
});

const ToastTitle = styled(ToastPrimitives.Title, {
  fontSize: "$3",
  fontWeight: "$medium",
  gridArea: "title",
  m: 0,
});

const ToastDescription = styled(ToastPrimitives.Description, {
  color: "$textDescription",
  fontSize: "$2",
  gridArea: "description",
  lineHeight: 1.3,
  m: 0,
});

export const ToastAction = styled(ToastPrimitives.Action, {
  gridArea: "action",
});

const StyledCrossCircledIcon = styled(CrossCircledIcon, {
  color: "$error",
});
