import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";
import { homemadeRecipe } from "../homemade-recipe.css";

export const formMessageRecipe = homemadeRecipe({
  base: {
    fontSize: theme.fontSizes[2],
    opacity: 0.8,
  },

  variants: {
    error: {
      true: {
        color: theme.semanticColors.error.error9,
      },
    },
  },
  defaultVariants: {},
});

export type FormMessageVariants = NonNullable<
  HomemadeRecipeVariants<typeof formMessageRecipe>
>;
