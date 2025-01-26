import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const boxRecipe = recipe({
  base: {
    boxSizing: "border-box",
  },

  variants: {},
  defaultVariants: {},
});

export type BoxVariants = NonNullable<RecipeVariants<typeof boxRecipe>>;
