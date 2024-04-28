import React from "react";
import { styled, VariantProps, CSS } from "./stitches.config";
import * as SwitchPrimitive from "@radix-ui/react-switch";

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  backgroundColor: "white",
  borderRadius: "$round",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;",
  left: 0,
  position: "absolute",
  size: "$3",
  transform: "translateX(1px)",
  transition: "transform 100ms cubic-bezier(0.22, 1, 0.36, 1)",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX(11px)",
  },
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: "unset",

  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  alignItems: "center",
  backgroundColor: "$divider",
  borderRadius: "$full",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  position: "relative",
  userSelect: "none",

  "&::after": {
    boxSizing: "border-box",
  },
  "&::before": {
    boxSizing: "border-box",
  },

  "@hover": {
    "&:hover": {
      cursor: "pointer",
    },
  },

  "&:disabled": {
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  variants: {
    color: {
      primary: {
        '&[data-state="checked"]': {
          backgroundColor: "$primary",
        },
      },
      secondary: {
        '&[data-state="checked"]': {
          backgroundColor: "$secondary",
        },
      },
    },
    size: {
      "1": {
        width: "$6",
        height: "$4",

        [`& ${StyledThumb}`]: {
          size: "$3",
          transform: "translateX(2px)",

          '&[data-state="checked"]': {
            transform: "translateX(10px)",
          },
        },
      },
      "2": {
        width: "48px",
        height: "$6",

        [`& ${StyledThumb}`]: {
          size: "$5",
          transform: "translateX(2px)",

          '&[data-state="checked"]': {
            transform: "translateX(26px)",
          },
        },
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "2",
  },
});

type SwitchVariants = VariantProps<typeof StyledSwitch>;
type SwitchPrimitiveProps = React.ComponentProps<typeof SwitchPrimitive.Root>;
type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS };

/**
 * Nayhoo switch component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Switch.stories.tsx
 */
export const Switch = React.forwardRef<React.ElementRef<typeof StyledSwitch>, SwitchProps>(
  (props, forwardedRef) => (
    <StyledSwitch {...props} ref={forwardedRef}>
      <StyledThumb />
    </StyledSwitch>
  )
);
