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
        height: theme.fontSizes[1],
        width: theme.fontSizes[1],
      },
      "2": {
        height: theme.fontSizes[2],
        width: theme.fontSizes[2],
      },
      "3": {
        height: theme.fontSizes[3],
        width: theme.fontSizes[3],
      },
    },
  },

  defaultVariants: {
    size: "1",
  },
});

// Get the type
export type SpinnerVariants = HomemadeRecipeVariants<typeof spinnerRecipe>;
