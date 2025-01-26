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
        color: theme.semanticColors.primary.primary9,
        textDecorationColor: theme.semanticColors.primary.primary9,
      },
      secondary: {
        color: theme.semanticColors.secondary.secondary9,
        textDecorationColor: theme.semanticColors.secondary.secondary9,
      },
      error: {
        color: theme.semanticColors.error.error9,
        textDecorationColor: theme.semanticColors.error.error9,
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
