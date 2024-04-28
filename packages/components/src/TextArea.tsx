import { styled } from "./stitches.config";

/**
 * Nayhoo text area component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/TextArea.stories.tsx
 */
export const TextArea = styled("textarea", {
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  appearance: "none",
  background: "transparent",
  borderWidth: "0",
  color: "inherit",
  fontFamily: "inherit",
  fontVariantNumeric: "tabular-nums",
  margin: "0",
  minHeight: 80,
  outline: "none",
  position: "relative",
  resize: "vertical",

  "@hover": {
    "&:hover": {
      backgroundColor: "$transparentHover",
    },
  },

  "&:disabled": {
    backgroundColor: "$transparentDisabled",
    color: "$textDisabled",
    cursor: "not-allowed",
    pointerEvents: "none",
    resize: "none",
  },
  "&:focus": {
    outline: "1px solid $text",
    zIndex: "1",
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
    size: {
      "1": {
        borderRadius: "$lg",
        fontSize: "$xs",
        lineHeight: "$fontSizes$xs",
        p: "$1",
      },
      "2": {
        borderRadius: "$lg",
        fontSize: "$sm",
        lineHeight: "$fontSizes$sm",
        p: "$1",
      },
      "3": {
        borderRadius: "$xl",
        fontSize: "$base",
        lineHeight: "$fontSizes$base",
        p: "$2",
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
