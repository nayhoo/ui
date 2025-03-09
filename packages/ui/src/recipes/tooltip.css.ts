import { theme } from "@/theme-contracts/theme-contract.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const tooltipContentRecipe = recipe({
  base: {
    backgroundColor: theme.semanticColors.transparentSurface,
    borderRadius: theme.radii[1],
    padding: `${theme.space[1]} ${theme.space[2]}`,

    color: theme.semanticColors.transparentSurfaceTextContrast,
  },

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
  defaultVariants: {},
});

export type TooltipContentVariants = NonNullable<
  RecipeVariants<typeof tooltipContentRecipe>
>;
