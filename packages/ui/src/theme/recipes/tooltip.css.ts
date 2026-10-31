import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const tooltipContentRecipe = homemadeRecipe({
  base: {
    backgroundColor: theme.colors.transparentSurface,
    borderRadius: theme.radii[1],
    padding: `${theme.space[1]} ${theme.space[2]}`,

    color: theme.colors.transparentSurfaceTextContrast,

    zIndex: theme.zIndices[1],
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
