import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { styled, keyframes } from "@stitches/react";
import { hide } from "./keyframes";
import { Flex } from "./Flex";

type Message = {
  action?: JSX.Element;
  description?: string;
  title?: string;
};

export const useToast = () => {
  const [open, setOpen] = React.useState(false);
  const messageRef = React.useRef<Message>({});
  const timerRef = React.useRef(0);

  React.useEffect(() => () => clearTimeout(timerRef.current), []);

  const toast = ({ action, description, title }: Message) => {
    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      messageRef.current = { action, description, title };
      setOpen(true);
    }, 100);
  };

  const Toaster = () => (
    <ToastPrimitives.Provider swipeDirection="right">
      <ToastRoot open={open} onOpenChange={setOpen}>
        <Flex direction="column" gap="2">
          {messageRef.current.title && <ToastTitle>{messageRef.current.title}</ToastTitle>}
          {messageRef.current.description && (
            <ToastDescription>{messageRef.current.description}</ToastDescription>
          )}
        </Flex>
        {messageRef.current.action}
      </ToastRoot>
      <ToastViewport />
    </ToastPrimitives.Provider>
  );

  return [toast, <Toaster />] as const;
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
