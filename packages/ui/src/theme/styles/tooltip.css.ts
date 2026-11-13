import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const tooltipContent = homemadeRecipe({
  base: {
    backgroundColor: "rgb(0, 0, 0)",
    borderRadius: theme.radii[1],
    padding: `${theme.space[1]} ${theme.space[2]}`,

    zIndex: theme.zIndex[1],
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
  HomemadeRecipeVariants<typeof tooltipContent>
>;
