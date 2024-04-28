import { CSS, VariantProps, styled } from "./stitches.config";
import { Spinner } from "./Spinner";
import React from "react";

type IconButtonVariants = VariantProps<typeof StyledButton>;
type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonVariants & { css?: CSS };

/**
 * Nayhoo icon button component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/IconButton.stories.tsx
 */
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
  fontSize: "$sm",
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
    backgroundColor: "$transparentDisabled",
    boxShadow: "none",
    color: "$textDisabled",
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  "@hover": {
    "&:hover": {
      backgroundColor: "$transparentHover",
      cursor: "pointer",
    },
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$lg",
        size: "$6",
      },
      "2": {
        borderRadius: "$xl",
        size: "$8",
      },
      "3": {
        borderRadius: "$xl",
        size: "3rem",
      },
      "4": {
        borderRadius: "$2xl",
        size: "4rem",
      },
    },
    variant: {
      ghost: {
        backgroundColor: "transparent",
        borderWidth: "0",

        "&:active": {
          backgroundColor: "$transparentPressed",
        },
      },
      outline: {
        boxShadow: "inset 0 0 0 1px $colors$divider",

        "&:active": {
          backgroundColor: "$transparentPressed",
        },
      },
      // raised: {
      //   boxShadow: "$colors$shadow 0px 10px 38px -10px, $colors$shadow 0px 10px 20px -15px",

      //   "&:active": {
      //     backgroundColor: "$transparentPressed",
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
