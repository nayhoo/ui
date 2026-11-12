import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const text = homemadeRecipe({
  base: {
    fontVariantNumeric: "tabular-nums",
    fontFamily: theme.fontFamily.text,
  },

  variants: {
    color: {
      primary: {
        color: theme.color.content.primary.foreground,
        selectors: {
          "&:disabled": {
            color: theme.color.content.primary.disabled,
          },
        },
      },
      subtle: {
        color: theme.color.content.subtle.foreground,
        selectors: {
          "&:disabled": {
            color: theme.color.content.subtle.disabled,
          },
        },
      },
      error: {
        color: theme.color.content.error.foreground,
      },
      inherit: {
        color: "inherit",
      },
    },
    size: {
      "1": {
        fontSize: theme.fontSize[1],
        letterSpacing: theme.letterSpacing[1],
        lineHeight: theme.lineHeight[1],
      },
      "2": {
        fontSize: theme.fontSize[2],
        letterSpacing: theme.letterSpacing[2],
        lineHeight: theme.lineHeight[2],
      },
      "3": {
        fontSize: theme.fontSize[3],
        letterSpacing: theme.letterSpacing[3],
        lineHeight: theme.lineHeight[3],
      },
      "4": {
        fontSize: theme.fontSize[4],
        letterSpacing: theme.letterSpacing[4],
        lineHeight: theme.lineHeight[4],
      },
      "5": {
        fontSize: theme.fontSize[5],
        letterSpacing: theme.letterSpacing[5],
        lineHeight: theme.lineHeight[5],
      },
      "6": {
        fontSize: theme.fontSize[6],
        letterSpacing: theme.letterSpacing[6],
        lineHeight: theme.lineHeight[6],
      },
      "7": {
        fontSize: theme.fontSize[7],
        letterSpacing: theme.letterSpacing[7],
        lineHeight: theme.lineHeight[7],
      },
      "8": {
        fontSize: theme.fontSize[8],
        letterSpacing: theme.letterSpacing[8],
        lineHeight: theme.lineHeight[8],
      },
      "9": {
        fontSize: theme.fontSize[9],
        letterSpacing: theme.letterSpacing[9],
        lineHeight: theme.lineHeight[9],
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
    color: "primary",
    size: "3",
    weight: "regular",
  },
});

export type TextVariants = NonNullable<HomemadeRecipeVariants<typeof text>>;
