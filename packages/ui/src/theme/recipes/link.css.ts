import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const linkRecipe = homemadeRecipe({
  base: {
    alignItems: "center",
    flexShrink: 0,
    fontFamily: theme.fontFamily.text,
    fontSize: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
    outline: "none",
    textDecorationColor: "inherit",
    textDecorationLine: "none",
    textUnderlineOffset: "3px",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

    selectors: {
      "&:focus": {
        outlineOffset: "2px",
        outlineStyle: "solid",
        outlineWidth: "2px",
        textDecorationLine: "none",
      },

      "&:hover": {
        cursor: "pointer",
        textDecorationLine: "underline",
      },
    },
  },

  variants: {
    color: {
      primary: {
        color: theme.color.primary.primary9,
        textDecorationColor: theme.color.primary.primary9,
      },
      secondary: {
        color: theme.color.secondary.secondary9,
        textDecorationColor: theme.color.secondary.secondary9,
      },
      error: {
        color: theme.color.error.error9,
        textDecorationColor: theme.color.error.error9,
      },
      subtle: {
        color: theme.color.textSubtle,
        textDecorationColor: theme.color.textSubtle,
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export type LinkVariants = NonNullable<
  HomemadeRecipeVariants<typeof linkRecipe>
>;
