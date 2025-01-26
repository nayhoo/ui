import { theme } from "@/theme-contracts/theme-contract.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const panelRecipe = recipe({
  base: {
    backgroundColor: theme.semanticColors.surface,
    borderRadius: theme.radii[3],
    // boxShadow: `${vars.colors.slate.slate8} 0px 10px 38px -10px, ${vars.colors.slate.slate8} 0px 10px 20px -15px`,
    boxShadow: `rgba(0, 0, 0, 0.12) 0px 10px 38px -10px, rgba(0, 0, 0, 0.12) 0px 10px 20px -15px`,
  },

  variants: {},
  defaultVariants: {},
});

export type PanelVariants = NonNullable<RecipeVariants<typeof panelRecipe>>;
