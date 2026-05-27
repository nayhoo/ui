import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";
import { homemadeRecipe } from "../homemade-recipe.css";

export const tooltipContentRecipe = homemadeRecipe({
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
  HomemadeRecipeVariants<typeof tooltipContentRecipe>
>;
