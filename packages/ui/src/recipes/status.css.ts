import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const statusRecipe = recipe({
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
        backgroundColor: theme.colors.slate.slate7,
      },
      blue: {
        backgroundColor: theme.colors.blue.blue9,
      },
      green: {
        backgroundColor: theme.colors.green.green9,
      },
      yellow: {
        backgroundColor: theme.colors.yellow.yellow9,
      },
      red: {
        backgroundColor: theme.colors.red.red9,
      },
    },
  },
  defaultVariants: {
    size: "2",
    variant: "gray",
  },
});

export type StatusVariants = NonNullable<RecipeVariants<typeof statusRecipe>>;
