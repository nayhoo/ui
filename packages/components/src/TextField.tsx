import { styled } from "./stitches.config";

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
        borderRadius: "$1",
        fontSize: "$1",
        height: "$5",
        lineHeight: "$sizes$3",
        px: "$1",

        "&:-webkit-autofill::first-line": {
          fontSize: "$1",
        },
      },
      "2": {
        borderRadius: "$1",
        fontSize: "$2",
        height: "$6",
        lineHeight: "$sizes$4",
        px: "$1",

        "&:-webkit-autofill::first-line": {
          fontSize: "$2",
        },
      },
      "3": {
        borderRadius: "$2",
        fontSize: "$3",
        height: "$6",
        lineHeight: "$sizes$5",
        px: "$2",

        "&:-webkit-autofill::first-line": {
          fontSize: "$3",
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
