import { styled } from "../stitches.config";

export const TextArea = styled("textarea", {
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  appearance: "none",
  background: "transparent",
  borderWidth: "0",
  fontFamily: "inherit",
  fontVariantNumeric: "tabular-nums",
  margin: "0",
  minHeight: 80,
  outline: "none",
  position: "relative",
  resize: "vertical",

  "@hover": {
    "&:hover": {
      backgroundColor: "$bgHover",
    },
  },

  "&:disabled": {
    backgroundColor: "$bgDisabled",
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
    backgroundColor: "$bgDisabled",

    "&:focus": {
      // boxShadow: "inset 0px 0px 0px 1px $colors$line",
    },
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
        borderRadius: "$1",
        fontSize: "$1",
        lineHeight: "$sizes$3",
        p: "$1",
      },
      "2": {
        borderRadius: "$1",
        fontSize: "$2",
        lineHeight: "$sizes$4",
        p: "$1",
      },
      "3": {
        borderRadius: "$2",
        fontSize: "$3",
        lineHeight: "$sizes$5",
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
        boxShadow: "inset 0 0 0 1px $colors$line",
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
