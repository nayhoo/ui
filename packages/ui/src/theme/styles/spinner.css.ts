import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { spin } from "@/theme/animations/spin.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const spinner = homemadeRecipe({
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
    size: "2",
  },
});

// Get the type
export type SpinnerVariants = HomemadeRecipeVariants<typeof spinner>;
