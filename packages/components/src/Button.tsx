import { CSS, VariantProps, styled } from "./stitches.config";
import { Spinner } from "./Spinner";
import React from "react";

type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & { css?: CSS };

/**
 * Nayhoo button component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Button.stories.tsx
 */
export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  (props, forwardedRef) => (
    <StyledButton {...props} disabled={props.disabled || Boolean(props.loading)} ref={forwardedRef}>
      {props.children}
      {props.loading && <Spinner css={{ position: "absolute" }} />}
    </StyledButton>
  )
);

const StyledButton = styled("button", {
  all: "unset",

  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  alignItems: "center",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  fontSize: "$sm",
  fontVariantNumeric: "tabular-nums",
  fontWeight: "$medium",
  height: "$6",
  justifyContent: "center",
  lineHeight: "1",
  px: "$2",
  transition: "all 100ms",
  userSelect: "none",

  "@hover": {
    "&:hover": {
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
    boxShadow: "none",
    color: "$textDisabled",
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  variants: {
    color: {
      primary: {},
      secondary: {},
      error: {},
    },
    loading: {
      true: {
        color: "transparent !important",
      },
    },
    shape: {
      square: {},
      pill: {
        borderRadius: "$full",
      },
    },
    size: {
      "1": {
        borderRadius: "$lg",
        fontSize: "$xs",
        height: "$6",
        lineHeight: "$sizes$6",
        px: "$2",
      },
      "2": {
        borderRadius: "$xl",
        fontSize: "$base",
        height: "$8",
        lineHeight: "$sizes$8",
        px: "$4",
      },
      "3": {
        borderRadius: "$xl",
        fontSize: "$lg",
        height: "$10",
        lineHeight: "$sizes$10",
        px: "$5",
      },
      fullWidth: {
        true: {
          width: "$full",
        },
      },
    },
    variant: {
      default: {
        boxShadow: "$colors$shadow 0px 10px 38px -10px, $colors$shadow 0px 10px 20px -15px",

        "@hover": {
          "&:hover": {},
        },
        "&:active": {},
      },
      outline: {
        boxShadow: "inset 0 0 0 1px $colors$divider",

        "@hover": {
          "&:hover": {
            backgroundColor: "$transparentHover",
          },
        },
        "&:active": {
          backgroundColor: "$transparentPressed",
        },
      },
      ghost: {
        backgroundColor: "transparent",

        "@hover": {
          "&:hover": {
            backgroundColor: "$transparentHover",
          },
        },
        "&:active": {
          backgroundColor: "$transparentPressed",
        },
      },
    },
  },

  compoundVariants: [
    {
      variant: "default",
      color: "primary",
      css: {
        backgroundColor: "$primary",
        color: "$primaryTextContrast",

        "@hover": {
          "&:hover": {
            backgroundColor: "$primaryDarker",
          },
        },
        "&:active": {
          backgroundColor: "$primaryLighter",
        },
      },
    },
    {
      variant: "default",
      color: "secondary",
      css: {
        backgroundColor: "$secondary",
        color: "$secondaryTextContrast",

        "@hover": {
          "&:hover": {
            backgroundColor: "$secondaryDarker",
          },
        },
        "&:active": {
          backgroundColor: "$secondaryLighter",
        },
      },
    },
    {
      variant: "default",
      color: "error",
      css: {
        backgroundColor: "$error",
        color: "$errorTextContrast",

        "@hover": {
          "&:hover": {
            backgroundColor: "$errorDarker",
          },
        },
        "&:active": {
          backgroundColor: "$errorLighter",
        },
      },
    },
  ],

  defaultVariants: {
    color: "primary",
    size: "2",
    variant: "default",
  },
});
