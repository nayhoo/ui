import React from "react";
import { styled, CSS, css, VariantProps } from "../stitches.config";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { panelStyles } from "./Panel";
import { IconButton } from "./IconButton";
import { Flex } from "./Flex";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

export const overlayStyles = css({
  backgroundColor: "rgba(0, 0, 0, .15)",
});

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  maxHeight: "85vh",

  marginTop: "-5vh",
  // animation: `${fadeIn} 125ms linear, ${moveDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: "transform",

  "&:focus": {
    outline: "none",
  },

  overflow: "auto",

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    size: {
      "1": {
        maxWidth: "430px",
      },
      "2": {
        maxWidth: "715px",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: "4",
  },
});

const DialogHeader = styled(Flex, {
  backgroundColor: "$neutral",
  position: "sticky",
  px: "$4",
  py: "$1",
  zIndex: "$1",

  top: 0,
});

type DialogContentVariants = VariantProps<typeof StyledContent>;
type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type DialogContentProps = DialogContentPrimitiveProps &
  DialogContentVariants & {
    css?: CSS;
    components?: { Footer?: React.ReactNode };
  };

const DialogContent = React.forwardRef<React.ElementRef<typeof StyledContent>, DialogContentProps>(
  ({ children, components, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props} ref={forwardedRef}>
        <DialogHeader justify="end">
          <DialogPrimitive.Close asChild>
            <IconButton variant="ghost">
              <Cross1Icon />
            </IconButton>
          </DialogPrimitive.Close>
        </DialogHeader>

        <div style={{ padding: "20px" }}>{children}</div>

        {components?.Footer}
      </StyledContent>
    </DialogPrimitive.Portal>
  )
);

const DialogClose = DialogPrimitive.Close;

const DialogTitle = styled(DialogPrimitive.Title, {
  m: 0,
  mb: "$3",
});

const DialogDescription = styled(DialogPrimitive.Description, {
  mb: "$3",
  fontSize: "$3",
  color: "$label",
});

const DialogFooter = styled(Flex, {
  backgroundColor: "$panel",
  position: "sticky",
  px: "$4",
  py: "$2",
  zIndex: "$1",

  borderTop: "1px solid $cloud",
  bottom: 0,
  gap: "$2",
});

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogFooter,
};
