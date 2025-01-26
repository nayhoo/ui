import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const textRecipe = recipe({
  base: {
    lineHeight: "1",
    margin: "0",
    fontWeight: theme.fontWeights.regular,
    fontVariantNumeric: "tabular-nums",
    display: "block",

    fontFamily: theme.fonts.text,
  },

  variants: {
    color: {
      primary: {
        color: theme.semanticColors.primary.primary9,
      },
      secondary: {
        color: theme.semanticColors.secondary.secondary9,
      },
      error: {
        color: theme.semanticColors.error.error9,
      },
      subtle: {
        color: theme.semanticColors.textSubtle,
      },
    },
    size: {
      "1": {
        fontSize: theme.fontSizes[1],
      },
      "2": {
        fontSize: theme.fontSizes[2],
      },
      "3": {
        fontSize: theme.fontSizes[3],
      },
      "4": {
        fontSize: theme.fontSizes[4],
      },
      "5": {
        fontSize: theme.fontSizes[5],
      },
      "6": {
        fontSize: theme.fontSizes[6],
      },
      "7": {
        fontSize: theme.fontSizes[7],
      },
      "8": {
        fontSize: theme.fontSizes[8],
      },
      "9": {
        fontSize: theme.fontSizes[9],
      },
    },
    weight: {
      regular: {
        fontWeight: theme.fontWeights.regular,
      },
      medium: {
        fontWeight: theme.fontWeights.medium,
      },
      bold: {
        fontWeight: theme.fontWeights.bold,
      },
    },
  },

  defaultVariants: {
    size: "3",
  },
});

export type TextVariants = NonNullable<RecipeVariants<typeof textRecipe>>;
