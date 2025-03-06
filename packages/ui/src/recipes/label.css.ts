import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const labelRecipe = recipe({
  base: [
    {
      display: "inline-block",
      verticalAlign: "middle",
      cursor: "default",
    },
  ],

  variants: {},

  defaultVariants: {},
});

export type LabelVariants = NonNullable<RecipeVariants<typeof labelRecipe>>;
