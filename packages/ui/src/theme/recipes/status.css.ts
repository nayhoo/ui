import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import * as colors from "@radix-ui/colors";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const statusRecipe = homemadeRecipe({
  base: {
    borderRadius: "50%",
    flexShrink: 0,
  },

  variants: {
    size: {
      "1": {
        width: 5,
        height: 5,
      },
      "2": {
        width: 9,
        height: 9,
      },
    },
    variant: {
      gray: {
        backgroundColor: colors.slate.slate7,
      },
      blue: {
        backgroundColor: colors.blue.blue9,
      },
      green: {
        backgroundColor: colors.green.green9,
      },
      yellow: {
        backgroundColor: colors.yellow.yellow9,
      },
      red: {
        backgroundColor: colors.red.red9,
      },
    },
  },
  defaultVariants: {
    size: "2",
    variant: "gray",
  },
});

export type StatusVariants = NonNullable<
  HomemadeRecipeVariants<typeof statusRecipe>
>;
