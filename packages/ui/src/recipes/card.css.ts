import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { panelRecipe } from "./panel.css";

export const cardRecipe = recipe({
  base: [
    panelRecipe({}),
    {
      padding: `${theme.space[5]} ${theme.space[5]} ${theme.space[6]} ${theme.space[5]}`,
    },
  ],

  variants: {
    variant: {
      outline: {
        outline: `1px solid ${theme.semanticColors.line}`,
      },
      ghost: {},
    },
    disableElevation: {
      true: {
        boxShadow: "none",
      },
    },
  },

  defaultVariants: {
    variant: "ghost",
    disableElevation: false,
  },
});

export type CardVariants = NonNullable<RecipeVariants<typeof cardRecipe>>;
