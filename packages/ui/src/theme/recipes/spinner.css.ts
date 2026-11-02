import { spin } from "@/theme/animations/spin.css";
import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const spinnerRecipe = homemadeRecipe({
  base: {
    animation: `${spin} .8s linear infinite`,
    border: "2px solid currentColor",
    borderRadius: theme.radii.round,
    borderTop: "2px solid transparent",
  },

  variants: {
    size: {
      "1": {
        height: theme.fontSize[1],
        width: theme.fontSize[1],
      },
      "2": {
        height: theme.fontSize[2],
        width: theme.fontSize[2],
      },
      "3": {
        height: theme.fontSize[3],
        width: theme.fontSize[3],
      },
    },
  },

  defaultVariants: {
    size: "1",
  },
});

// Get the type
export type SpinnerVariants = HomemadeRecipeVariants<typeof spinnerRecipe>;
