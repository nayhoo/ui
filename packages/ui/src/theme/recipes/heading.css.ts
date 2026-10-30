import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";
import { homemadeRecipe } from "../homemade-recipe.css";

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
      },
      "2": {
        fontSize: theme.fontSizes[7],
      },
      "3": {
        fontSize: theme.fontSizes[6],
      },
      "4": {
        fontSize: theme.fontSizes[5],
      },
      "5": {
        fontSize: theme.fontSizes[4],
      },
      "6": {
        fontSize: theme.fontSizes[3],
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
