import { CSS, VariantProps, styled } from "../stitches.config";
import { Spinner } from "./Spinner";
import React from "react";

type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & { css?: CSS };

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
  fontSize: "$2",
  fontVariantNumeric: "tabular-nums",
  fontWeight: "$medium",
  height: "$5",
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
    backgroundColor: "$disabled",
    boxShadow: "none",
    color: "$textDisabled",
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  variants: {
    color: {
      primary: {},
      secondary: {},
      accent: {},
      info: {},
      success: {},
      warning: {},
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
        borderRadius: "$pill",
      },
    },
    size: {
      "1": {
        borderRadius: "$1",
        fontSize: "$1",
        height: "$5",
        lineHeight: "$sizes$5",
        px: "$2",
      },
      "2": {
        borderRadius: "$2",
        fontSize: "$3",
        height: "$6",
        lineHeight: "$sizes$6",
        px: "$3",
      },
      "3": {
        borderRadius: "$2",
        fontSize: "$4",
        height: "$7",
        lineHeight: "$sizes$7",
        px: "$4",
      },
    },
    variant: {
      default: {
        color: "$white",
        backgroundColor: "$primary",

        "@hover": {
          "&:hover": {},
        },
        "&:active": {},
      },
      outline: {
        color: "$hiContrast",
        boxShadow: "inset 0 0 0 1px $colors$line",

        "@hover": {
          "&:hover": {
            backgroundColor: "$hover",
          },
        },
        "&:active": {
          backgroundColor: "$pressed",
        },
      },
      ghost: {
        backgroundColor: "transparent",

        "@hover": {
          "&:hover": {
            backgroundColor: "$hover",
          },
        },
        "&:active": {
          backgroundColor: "$pressed",
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
        // contrastTextColor: "$primary",
      },
    },
    {
      variant: "default",
      color: "secondary",
      css: {
        backgroundColor: "$secondary",
        // contrastTextColor: "$secondary",
      },
    },
    {
      variant: "default",
      color: "accent",
      css: {
        backgroundColor: "$accent",
        // contrastTextColor: "$accent",
      },
    },
    {
      variant: "default",
      color: "info",
      css: {
        backgroundColor: "$info",
        // contrastTextColor: "$info",
      },
    },
    {
      variant: "default",
      color: "success",
      css: {
        backgroundColor: "$success",
        // contrastTextColor: "$success",
      },
    },
    {
      variant: "default",
      color: "warning",
      css: {
        backgroundColor: "$warning",
        // contrastTextColor: "$warning",
      },
    },
    {
      variant: "default",
      color: "error",
      css: {
        backgroundColor: "$error",
        // contrastTextColor: "$error",
      },
    },
  ],

  defaultVariants: {
    color: "primary",
    size: "2",
    variant: "default",
  },
});
