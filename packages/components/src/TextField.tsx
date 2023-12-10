import { styled } from "../stitches.config";

export const TextField = styled("input", {
  // Reset
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  padding: "0",
  width: "100%",
  // WebkitTapHighlightColor: "rgba(0,0,0,0)",

  color: "$text",

  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  background: "transparent",

  "@hover": {
    "&:hover": {
      backgroundColor: "$cloud",
    },
  },

  // Custom
  boxShadow: "inset 0 0 0 1px $colors$slate7",
  fontVariantNumeric: "tabular-nums",

  "&:-webkit-autofill": {},

  "&:-webkit-autofill::first-line": {
    fontFamily: "$untitled",
    color: "$hiContrast",
  },

  "&:focus": {
    outline: "1px solid $activeOutline",
    "&:-webkit-autofill": {},
  },
  "&::placeholder": {
    color: "$nimbus",
  },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "$slate2",
    color: "$slate8",
    cursor: "not-allowed",
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
        height: "$5",
        lineHeight: "$sizes$5",
        px: "$1",
        "&:-webkit-autofill::first-line": {
          fontSize: "$1",
        },
      },
      "2": {
        borderRadius: "$1",
        fontSize: "$2",
        height: "$6",
        lineHeight: "$sizes$6",
        px: "$1",
        "&:-webkit-autofill::first-line": {
          fontSize: "$2",
        },
      },
      "3": {
        borderRadius: "$2",
        fontSize: "$3",
        lineHeight: "7px",
        px: "$2",
        height: "$6",
        "&:-webkit-autofill::first-line": {
          fontSize: "$3",
        },
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
