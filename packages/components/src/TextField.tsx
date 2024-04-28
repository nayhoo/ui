import { styled } from "./stitches.config";

/**
 * Nayhoo text field component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/TextField.stories.tsx
 */
export const TextField = styled("input", {
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  appearance: "none",
  background: "transparent",
  borderWidth: "0",
  boxSizing: "border-box",
  color: "inherit",
  fontFamily: "inherit",
  fontVariantNumeric: "tabular-nums",
  margin: "0",
  outline: "none",
  padding: "0",
  width: "100%",

  "@hover": {
    "&:hover": {
      backgroundColor: "$transparentHover",
    },
  },

  "&:-webkit-autofill": {},
  "&:-webkit-autofill::first-line": {
    fontFamily: "$untitled",
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
    outline: "1px solid $activeOutline",
    "&:-webkit-autofill": {},
  },
  "&:read-only": {
    backgroundColor: "$transparentDisabled",

    "&:focus": {
      // boxShadow: "inset 0px 0px 0px 1px $colors$divider",
    },
  },
  "&[data-invalid]": {
    boxShadow: "inset 0px 0px 0px 1px $colors$error",
  },
  "&[data-placeholder]": {
    color: "$textPlaceholder",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$lg",
        fontSize: "$xs",
        lineHeight: "$fontSizes$xs",
        height: "$6",
        px: "$1",

        "&:-webkit-autofill::first-line": {
          fontSize: "$xs",
        },
      },
      "2": {
        borderRadius: "$lg",
        fontSize: "$sm",
        lineHeight: "$fontSizes$sm",
        height: "$8",
        px: "$1",

        "&:-webkit-autofill::first-line": {
          fontSize: "$sm",
        },
      },
      "3": {
        borderRadius: "$xl",
        fontSize: "$base",
        lineHeight: "$fontSizes$base",
        height: "$8",
        px: "$2",

        "&:-webkit-autofill::first-line": {
          fontSize: "$base",
        },
      },
    },
    error: {
      true: {
        boxShadow: "inset 0px 0px 0px 1px $colors$error",

        "&:focus": {
          // boxShadow: "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
        },
      },
    },
    cursor: {
      default: {
        cursor: "default",
        "&:focus": {
          cursor: "text",
        },
      },
      text: {
        cursor: "text",
      },
    },
    variant: {
      outline: {
        boxShadow: "inset 0 0 0 1px $colors$divider",
      },
      ghost: {
        boxShadow: "none",
      },
    },
  },
  defaultVariants: {
    size: "3",
    variant: "outline",
  },
});
