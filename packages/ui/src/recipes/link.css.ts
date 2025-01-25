import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const linkRecipe = recipe({
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
        color: theme.semanticColors.primary,
        textDecorationColor: theme.semanticColors.primary,
      },
      secondary: {
        color: theme.semanticColors.secondary,
        textDecorationColor: theme.semanticColors.secondary,
      },
      error: {
        color: theme.semanticColors.error,
        textDecorationColor: theme.semanticColors.error,
      },
      subtle: {
        color: theme.semanticColors.textSubtle,
        textDecorationColor: theme.semanticColors.textSubtle,
      },
    },
  },

  defaultVariants: {},
});

export type LinkVariants = NonNullable<RecipeVariants<typeof linkRecipe>>;
