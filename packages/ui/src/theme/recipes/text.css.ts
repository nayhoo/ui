import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const textRecipe = homemadeRecipe({
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
        color: theme.colors.primary.primary9,
      },
      secondary: {
        color: theme.colors.secondary.secondary9,
      },
      error: {
        color: theme.colors.error.error9,
      },
      subtle: {
        color: theme.colors.textSubtle,
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

export type TextVariants = NonNullable<
  HomemadeRecipeVariants<typeof textRecipe>
>;
