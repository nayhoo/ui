import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const headingRecipe = homemadeRecipe({
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
    level: {
      "1": {
        fontSize: theme.fontSizes[8],
        letterSpacing: theme.letterSpacing[8],
        lineHeight: theme.lineHeights[8],
      },
      "2": {
        fontSize: theme.fontSizes[7],
        letterSpacing: theme.letterSpacing[7],
        lineHeight: theme.lineHeights[7],
      },
      "3": {
        fontSize: theme.fontSizes[6],
        letterSpacing: theme.letterSpacing[6],
        lineHeight: theme.lineHeights[6],
      },
      "4": {
        fontSize: theme.fontSizes[5],
        letterSpacing: theme.letterSpacing[5],
        lineHeight: theme.lineHeights[5],
      },
      "5": {
        fontSize: theme.fontSizes[4],
        letterSpacing: theme.letterSpacing[4],
        lineHeight: theme.lineHeights[4],
      },
      "6": {
        fontSize: theme.fontSizes[3],
        letterSpacing: theme.letterSpacing[3],
        lineHeight: theme.lineHeights[3],
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
    level: "1",
    weight: "medium",
  },
});

export type HeadingVariants = NonNullable<
  HomemadeRecipeVariants<typeof headingRecipe>
>;
