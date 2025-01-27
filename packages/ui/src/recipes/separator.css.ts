import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const separatorRecipe = recipe({
  base: {
    backgroundColor: theme.semanticColors.line,

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

  variants: {},

  defaultVariants: {},
});

export type SeparatorVariants = NonNullable<
  RecipeVariants<typeof separatorRecipe>
>;
