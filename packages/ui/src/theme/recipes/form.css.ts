import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const formMessageRecipe = homemadeRecipe({
  base: {
    fontSize: theme.fontSizes[2],
    opacity: 0.8,
  },

  variants: {
    error: {
      true: {
        color: theme.colors.error.error9,
      },
    },
  },
  defaultVariants: {},
});

export type FormMessageVariants = NonNullable<
  HomemadeRecipeVariants<typeof formMessageRecipe>
>;
