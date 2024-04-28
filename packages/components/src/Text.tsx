import { styled } from "./stitches.config";

/**
 * Nayhoo text component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Text.stories.tsx
 */
export const Text = styled("span", {
  // display: "block",
  fontVariantNumeric: "tabular-nums",
  lineHeight: "1",
  margin: "0",

  variants: {
    color: {
      primary: {
        color: "$primary",
      },
      secondary: {
        color: "$secondary",
      },
      error: {
        color: "$error",
      },
    },
    size: {
      "1": {
        fontSize: "$xs",
      },
      "2": {
        fontSize: "$sm",
      },
      "3": {
        fontSize: "$base",
      },
      "4": {
        fontSize: "$lg",
      },
      "5": {
        fontSize: "$xl",
      },
      "6": {
        fontSize: "$2xl",
      },
      "7": {
        fontSize: "$3xl",
      },
      "8": {
        fontSize: "$4xl",
      },
      "9": {
        fontSize: "$5xl",
      },
      "10": {
        fontSize: "$6xl",
      },
    },
    weight: {
      normal: {
        fontWeight: "$normal",
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
