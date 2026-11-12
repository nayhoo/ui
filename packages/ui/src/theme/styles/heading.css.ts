import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const heading = homemadeRecipe({
  base: {
    fontVariantNumeric: "tabular-nums",
    fontFamily: theme.fontFamily.text,
    color: theme.color.content.primary.foreground,
    selectors: {
      "&:disabled": {
        color: theme.color.content.primary.disabled,
      },
    },
  },

  variants: {
    as: {
      h1: {
        fontSize: theme.fontSize[8],
        letterSpacing: theme.letterSpacing[8],
        lineHeight: theme.lineHeight[8],
      },
      h2: {
        fontSize: theme.fontSize[7],
        letterSpacing: theme.letterSpacing[7],
        lineHeight: theme.lineHeight[7],
      },
      h3: {
        fontSize: theme.fontSize[6],
        letterSpacing: theme.letterSpacing[6],
        lineHeight: theme.lineHeight[6],
      },
      h4: {
        fontSize: theme.fontSize[5],
        letterSpacing: theme.letterSpacing[5],
        lineHeight: theme.lineHeight[5],
      },
      h5: {
        fontSize: theme.fontSize[4],
        letterSpacing: theme.letterSpacing[4],
        lineHeight: theme.lineHeight[4],
      },
      h6: {
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
    as: "h1",
    weight: "medium",
  },
});

export type HeadingVariants = NonNullable<
  HomemadeRecipeVariants<typeof heading>
>;
