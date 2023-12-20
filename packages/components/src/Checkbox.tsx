import React from "react";
import { styled, CSS, VariantProps } from "./stitches.config";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

type CheckboxPrimitiveProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;
type CheckboxVariants = VariantProps<typeof StyledCheckbox>;
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants & { css?: CSS };

export const Checkbox = React.forwardRef<React.ElementRef<typeof StyledCheckbox>, CheckboxProps>(
  (props, forwardedRef) => (
    <StyledCheckbox {...props} ref={forwardedRef}>
      <StyledIndicator>
        <CheckIcon />
      </StyledIndicator>
    </StyledCheckbox>
  )
);

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: "unset",

  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  alignItems: "center",
  appearance: "none",
  boxShadow: "inset 0 0 0 1px $colors$divider",
  boxSizing: "border-box",
  display: "inline-flex",
  justifyContent: "center",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  overflow: "hidden",
  padding: "0",
  userSelect: "none",

  "@hover": {
    "&:hover": {
      boxShadow: "inset 0 0 0 1px $colors$divider",
      backgroundColor: "$transparentHover",
      cursor: "pointer",
    },
  },
  "&::after": {
    boxSizing: "border-box",
  },
  "&::before": {
    boxSizing: "border-box",
  },
  "&:disabled": {
    backgroundColor: "$transparentDisabled",
    color: "$textDisabled",
    cursor: "not-allowed",
    pointerEvents: "none",
  },
  "&:focus": {
    outline: "none",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        size: "$3",
      },
      "2": {
        borderRadius: "$2",
        size: "$5",
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  width: "100%",
});
