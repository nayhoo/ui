import { styled } from "../stitches.config";

export const TextArea = styled("textarea", {
  // Reset
  appearance: "none",
  borderWidth: "0",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  backgroundColor: "$loContrast",
  boxShadow: "inset 0 0 0 1px $colors$slate7",
  color: "$hiContrast",
  fontVariantNumeric: "tabular-nums",
  position: "relative",
  minHeight: 80,
  resize: "vertical",

  "@hover": {
    "&:hover": {
      backgroundColor: "$cloud",
    },
  },

  "&:focus": {
    outline: "1px solid $activeOutline",
    zIndex: "1",
  },
  "&::placeholder": {
    color: "$nimbus",
  },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "$slate2",
    color: "$slate8",
    cursor: "not-allowed",
    resize: "none",
    "&::placeholder": {
      color: "$slate7",
    },
  },
  "&:read-only": {
    backgroundColor: "$slate2",
    "&:focus": {
      boxShadow: "inset 0px 0px 0px 1px $colors$slate7",
    },
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        fontSize: "$1",
        lineHeight: "16px",
        p: "$1",
      },
      "2": {
        borderRadius: "$1",
        fontSize: "$2",
        lineHeight: "20px",
        p: "$1",
      },
      "3": {
        borderRadius: "$2",
        fontSize: "$3",
        lineHeight: "23px",
        p: "$2",
      },
    },
    state: {
      invalid: {
        // boxShadow: "inset 0 0 0 1px $colors$red7",
        "&:focus": {
          // boxShadow: "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
        },
      },
      valid: {
        // boxShadow: "inset 0 0 0 1px $colors$green7",
        "&:focus": {
          // boxShadow: "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
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
  },
  defaultVariants: {
    size: "3",
  },
});
