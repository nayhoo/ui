import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { panelStyles } from "./Panel";
import { styled, CSS, css, VariantProps } from "./stitches.config";

/**
 * Nayhoo dialog component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Dialog.stories.tsx
 */
export const Dialog = DialogPrimitive.Root;

export const DialogClose = DialogPrimitive.Close;

type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type DialogContentVariants = VariantProps<typeof StyledContent>;
type DialogContentProps = DialogContentPrimitiveProps &
  DialogContentVariants & {
    components?: { Footer?: React.ReactNode; Header?: React.ReactNode };
    css?: CSS;
    disableOverlayBlur?: boolean;
  };

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, components, disableOverlayBlur = false, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay disableOverlayBlur={disableOverlayBlur} />
    <StyledContent {...props} ref={forwardedRef}>
      {components?.Header}

      <Box css={{ p: "$5" }}>{children}</Box>

      {components?.Footer}
    </StyledContent>
  </DialogPrimitive.Portal>
));

export const DialogDescription = styled(DialogPrimitive.Description, {
  color: "$textDescription",
  fontSize: "$base",
  mb: "$4",
});

export const DialogFooter = styled(Flex, {
  backgroundColor: "$surface",
  borderTop: "1px solid $divider",
  bottom: 0,
  gap: "$2",
  position: "sticky",
  px: "$5",
  py: "$2",
  zIndex: "$1",
});

export const DialogHeader = styled(Flex, {
  backgroundColor: "$surface",
  position: "sticky",
  px: "$5",
  py: "$1",
  top: 0,
  zIndex: "$1",
});

export const DialogTitle = styled(DialogPrimitive.Title, {
  m: "0 0 $4 0",
});

export const DialogTrigger = DialogPrimitive.Trigger;

export const overlayStyles = css({
  backgroundColor: "$transparentOverlay",
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
        width: "$full",
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

  backdropFilter: "blur(10px)",
  transition: "backdrop-filter 100ms linear",
  willChange: "backdrop-filter",

  "@hover": {
    "&:hover": {
      backdropFilter: "blur(0px)",
    },
  },

  variants: {
    disableOverlayBlur: {
      true: {
        backdropFilter: "blur(0px)",
      },
    },
  },
});
