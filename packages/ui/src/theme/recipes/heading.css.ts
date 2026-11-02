import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const headingRecipe = homemadeRecipe({
  base: {
    lineHeight: "1",
    margin: "0",
    fontWeight: theme.fontWeight.regular,
    fontVariantNumeric: "tabular-nums",
    display: "block",

    fontFamily: theme.fontFamily.text,
  },

  variants: {
    color: {
      primary: {
        color: theme.color.primary.primary9,
      },
      secondary: {
        color: theme.color.secondary.secondary9,
      },
      error: {
        color: theme.color.error.error9,
      },
      subtle: {
        color: theme.color.textSubtle,
      },
    },
    level: {
      "1": {
        fontSize: theme.fontSize[8],
        letterSpacing: theme.letterSpacing[8],
        lineHeight: theme.lineHeight[8],
      },
      "2": {
        fontSize: theme.fontSize[7],
        letterSpacing: theme.letterSpacing[7],
        lineHeight: theme.lineHeight[7],
      },
      "3": {
        fontSize: theme.fontSize[6],
        letterSpacing: theme.letterSpacing[6],
        lineHeight: theme.lineHeight[6],
      },
      "4": {
        fontSize: theme.fontSize[5],
        letterSpacing: theme.letterSpacing[5],
        lineHeight: theme.lineHeight[5],
      },
      "5": {
        fontSize: theme.fontSize[4],
        letterSpacing: theme.letterSpacing[4],
        lineHeight: theme.lineHeight[4],
      },
      "6": {
        fontSize: theme.fontSize[3],
        letterSpacing: theme.letterSpacing[3],
        lineHeight: theme.lineHeight[3],
      },
    },
    weight: {
      regular: {
        fontWeight: theme.fontWeight.regular,
      },
      medium: {
        fontWeight: theme.fontWeight.medium,
      },
      bold: {
        fontWeight: theme.fontWeight.bold,
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
