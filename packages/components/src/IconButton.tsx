import { CSS, VariantProps, styled } from "../stitches.config";
import { Spinner } from "./Spinner";
import React from "react";

type IconButtonVariants = VariantProps<typeof StyledButton>;
type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonVariants & { css?: CSS };

export const IconButton = React.forwardRef<React.ElementRef<"button">, IconButtonProps>(
  (props, forwardedRef) => (
    <StyledButton {...props} ref={forwardedRef} disabled={props.disabled || Boolean(props.loading)}>
      {props.children}
      {props.loading && <Spinner css={{ color: "$slate8", position: "absolute" }} />}
    </StyledButton>
  )
);

const StyledButton = styled("button", {
  // Reset
  alignItems: "center",
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  fontFamily: "inherit",
  fontSize: "14px",
  justifyContent: "center",
  lineHeight: "1",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  color: "$hiContrast",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  border: "1px solid $nimbus",
  "@hover": {
    "&:hover": {
      backgroundColor: "$cloud",
      // cursor: "pointer",
    },
  },

  "&:disabled": {
    backgroundColor: "$cloud",
    boxShadow: "inset 0 0 0 1px $colors$shadowLight",
    color: "$smoke",
    pointerEvents: "none",

    cursor: "not-allowed",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        width: "$5",
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        width: "$6",
      },
      "3": {
        borderRadius: "$2",
        height: "$7",
        width: "$7",
      },
      "4": {
        borderRadius: "$3",
        height: "$8",
        width: "$8",
      },
    },
    variant: {
      ghost: {
        backgroundColor: "transparent",
        borderWidth: "0",
        "@hover": {
          "&:hover": {
            backgroundColor: "$cloud",
          },
        },
        "&:active": {
          // backgroundColor: "$slateA4",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            // backgroundColor: "$slateA4",
          },
      },
      raised: {
        boxShadow:
          "0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)",
        "@hover": {
          "&:hover": {
            boxShadow:
              "0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)",
          },
        },
        "&:active": {
          backgroundColor: "$slate4",
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
    size: "1",
    variant: "ghost",
  },
});
