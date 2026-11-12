import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const separator = homemadeRecipe({
  base: {
    selectors: {
      "&[data-orientation=horizontal]": {
        height: 1,
        width: "100%",
      },
      "&[data-orientation=vertical]": {
        height: "100%",
        width: 1,
      },
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: theme.color.separable.primary.borderColor,
      },
      secondary: {
        backgroundColor: theme.color.separable.secondary.borderColor,
      },
      tertiary: {
        backgroundColor: theme.color.separable.tertiary.borderColor,
      },
    },
  },

  defaultVariants: {
    variant: "secondary",
  },
});

export type SeparatorVariants = HomemadeRecipeVariants<typeof separator>;
