import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const linkRecipe = homemadeRecipe({
  base: {
    alignItems: "center",
    gap: theme.space[1],
    flexShrink: 0,
    outline: "none",
    textDecorationLine: "none",
    textUnderlineOffset: "3px",
    textDecorationColor: "inherit",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    lineHeight: "inherit",

    color: "inherit",
    cursor: "pointer",

    fontFamily: theme.fonts.text,

    selectors: {
      "&:focus": {
        outlineOffset: "2px",
        outlineStyle: "solid",
        outlineWidth: "2px",
        textDecorationLine: "none",
      },

      "&:hover": {
        textDecorationLine: "underline",
      },

      // [`& ${Text}`]: {
      //   color: "inherit",
      // },
    },
  },

  variants: {
    color: {
      primary: {
        color: theme.colors.primary.primary9,
        textDecorationColor: theme.colors.primary.primary9,
      },
      secondary: {
        color: theme.colors.secondary.secondary9,
        textDecorationColor: theme.colors.secondary.secondary9,
      },
      error: {
        color: theme.colors.error.error9,
        textDecorationColor: theme.colors.error.error9,
      },
      subtle: {
        color: theme.colors.textSubtle,
        textDecorationColor: theme.colors.textSubtle,
      },
    },
  },

  defaultVariants: {},
});

export type LinkVariants = NonNullable<
  HomemadeRecipeVariants<typeof linkRecipe>
>;
