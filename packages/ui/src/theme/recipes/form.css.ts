import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const formMessageRecipe = recipe({
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
  RecipeVariants<typeof formMessageRecipe>
>;
