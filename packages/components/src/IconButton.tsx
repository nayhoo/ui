import { CSS, VariantProps, styled } from "../stitches.config";
import { Spinner } from "./Spinner";
import React from "react";

type IconButtonVariants = VariantProps<typeof StyledButton>;
type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonVariants & { css?: CSS };

export const IconButton = React.forwardRef<React.ElementRef<"button">, IconButtonProps>(
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
  justifyContent: "center",
  lineHeight: "1",
  padding: "0",
  transition: "all 100ms",
  userSelect: "none",

  "&::after": {
    boxSizing: "border-box",
  },
  "&::before": {
    boxSizing: "border-box",
  },
  "&:disabled": {
    backgroundColor: "$bgDisabled",
    boxShadow: "none",
    color: "$textDisabled",
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  "@hover": {
    "&:hover": {
      backgroundColor: "$bgHover",
      cursor: "pointer",
    },
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        size: "$5",
      },
      "2": {
        borderRadius: "$2",
        size: "$6",
      },
      "3": {
        borderRadius: "$2",
        size: "$7",
      },
      "4": {
        borderRadius: "$3",
        size: "$8",
      },
    },
    variant: {
      ghost: {
        backgroundColor: "transparent",
        borderWidth: "0",

        "&:active": {
          backgroundColor: "$bgPressed",
        },
      },
      outline: {
        boxShadow: "inset 0 0 0 1px $colors$line",

        "&:active": {
          backgroundColor: "$bgPressed",
        },
      },
      // raised: {
      //   boxShadow: "$colors$shadow 0px 10px 38px -10px, $colors$shadow 0px 10px 20px -15px",

      //   "&:active": {
      //     backgroundColor: "$bgPressed",
      //   },
      // },
    },
    loading: {
      true: {
        color: "transparent !important",
      },
    },
  },
  defaultVariants: {
    size: "1",
    variant: "ghost",
  },
});
