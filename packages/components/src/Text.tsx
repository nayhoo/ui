import { styled } from "../stitches.config";

export const Text = styled("span", {
  display: "block",
  fontVariantNumeric: "tabular-nums",
  lineHeight: "1",
  margin: "0",

  variants: {
    color: {
      primary: {
        color: "$textPrimary",
      },
      secondary: {
        color: "$textSecondary",
      },
      accent: {
        color: "$textAccent",
      },
    },
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
      "5": {
        fontSize: "$5",
        letterSpacing: "-.015em",
      },
      "6": {
        fontSize: "$6",
        letterSpacing: "-.016em",
      },
      "7": {
        fontSize: "$7",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      "8": {
        fontSize: "$8",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      "9": {
        fontSize: "$9",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
    weight: {
      regular: {
        fontWeight: "$regular",
      },
      medium: {
        fontWeight: "$medium",
      },
      bold: {
        fontWeight: "$bold",
      },
      black: {
        fontWeight: "$black",
      },
    },
  },

  defaultVariants: {
    size: "3",
  },
});
