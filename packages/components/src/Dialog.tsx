import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { panelStyles } from "./Panel";
import { styled, CSS, css, VariantProps } from "../stitches.config";

/* --------------------------------- Dialog --------------------------------- */
export const Dialog = DialogPrimitive.Root;

/* ------------------------------ Dialog close ------------------------------ */
export const DialogClose = DialogPrimitive.Close;

/* ----------------------------- Dialog content ----------------------------- */
type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type DialogContentVariants = VariantProps<typeof StyledContent>;
type DialogContentProps = DialogContentPrimitiveProps &
  DialogContentVariants & {
    components?: { Footer?: React.ReactNode; Header?: React.ReactNode };
    css?: CSS;
  };

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, components, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {components?.Header}

      <Box css={{ p: "$4" }}>{children}</Box>

      {components?.Footer}
    </StyledContent>
  </DialogPrimitive.Portal>
));

/* --------------------------- Dialog description --------------------------- */
export const DialogDescription = styled(DialogPrimitive.Description, {
  color: "$textSecondary",
  fontSize: "$3",
  mb: "$3",
});

/* ------------------------------ Dialog footer ----------------------------- */
export const DialogFooter = styled(Flex, {
  backgroundColor: "$panel",
  borderTop: "1px solid $line",
  bottom: 0,
  gap: "$2",
  position: "sticky",
  px: "$4",
  py: "$2",
  zIndex: "$1",
});

/* ------------------------------ Dialog header ----------------------------- */
export const DialogHeader = styled(Flex, {
  backgroundColor: "$neutral",
  position: "sticky",
  px: "$4",
  py: "$1",
  top: 0,
  zIndex: "$1",
});

/* ------------------------------ Dialog title ------------------------------ */
export const DialogTitle = styled(DialogPrimitive.Title, {
  m: "0 0 $3 0",
});

/* ----------------------------- Dialog trigger ----------------------------- */
export const DialogTrigger = DialogPrimitive.Trigger;

export const overlayStyles = css({
  backgroundColor: "rgba(0, 0, 0, .15)",
});

const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
  left: "50%",
  marginTop: "-5vh",
  maxHeight: "85vh",
  minWidth: 200,
  overflow: "auto",
  position: "fixed",
  top: "50%",
  transform: "translate(-50%, -50%)",
  willChange: "transform",

  "&:focus": {
    outline: "none",
  },

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

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  bottom: 0,
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,
});
