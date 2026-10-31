import { spin } from "@/theme/animations/spin.css";
import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const spinnerRecipe = homemadeRecipe({
  base: {
    animation: `${spin} .8s linear infinite`,
    border: `2px solid ${theme.colors.primary.primary9}`,
    borderRadius: theme.radii.round,
    borderTop: "2px solid transparent",
  },

  variants: {
    size: {
      "1": {
        height: theme.sizes[3],
        width: theme.sizes[3],
      },
      "2": {
        height: theme.sizes[4],
        width: theme.sizes[4],
      },
      "3": {
        height: theme.sizes[5],
        width: theme.sizes[5],
      },
    },
  },

  defaultVariants: {
    size: "2",
  },
});

// Get the type
export type SpinnerVariants = HomemadeRecipeVariants<typeof spinnerRecipe>;
