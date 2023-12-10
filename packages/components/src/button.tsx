import { CSS, VariantProps, styled } from "../stitches.config";
import { Spinner } from "./Spinner";
import React from "react";

type ButtonVariants = VariantProps<typeof StyledButton>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & { css?: CSS };

export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  (props, forwardedRef) => (
    <StyledButton {...props} disabled={props.disabled || Boolean(props.loading)} ref={forwardedRef}>
      {props.children}
      {props.loading && <Spinner css={{ color: "$nimbus", position: "absolute" }} />}
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
  fontFamily: "$untitled",
  fontSize: "$2",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 500,
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
    backgroundColor: "$cloud",
    boxShadow: "inset 0 0 0 1px $colors$shadowLight",
    color: "$smoke",
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  variants: {
    shape: {
      square: {
        // Default
      },
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
        boxShadow: "inset 0 0 0 1px $colors$slate7",
        backgroundColor: "$charcoal",

        "@hover": {
          "&:hover": {
            // boxShadow: "inset 0 0 0 1px $colors$slate8",
          },
        },
        "&:active": {
          // backgroundColor: "$slate2",
          // boxShadow: "inset 0 0 0 1px $colors$slate8",
        },
        // '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
        //   {
        //     backgroundColor: "$slate4",
        //     boxShadow: "inset 0 0 0 1px $colors$slate8",
        //   },
      },
      outline: {
        color: "$hiContrast",
        boxShadow: "inset 0 0 0 1px $colors$outline",
        backgroundColor: "$loContrast",

        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$shadowLight",
          },
        },
        "&:active": {
          backgroundColor: "$loContrast",
          boxShadow: "inset 0 0 0 1px $colors$shadowLight",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            boxShadow: "inset 0 0 0 1px $colors$outlineActive",
          },
      },
      ghost: {
        backgroundColor: "transparent",
        boxShadow: "none",

        "@hover": {
          "&:hover": {
            backgroundColor: "$cloud",
          },
        },
        "&:active": {
          backgroundColor: "$shark",
        },
      },
    },
    loading: {
      true: {
        color: "transparent !important",
      },
    },
  },

  defaultVariants: {
    size: "2",
    variant: "default",
  },
});
