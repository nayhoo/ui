import { HomemadeRecipeVariants } from "homemade-recipes";
import { homemadeRecipe } from "../homemade-recipe.css";

export const boxRecipe = homemadeRecipe({
  variants: {
    display: {
      none: { display: "none" },
      block: { display: "block" },
      inline: { display: "inline" },
      inlineBlock: { display: "inline-block" },
      flex: { display: "flex" },
      inlineFlex: { display: "inline-flex" },
      grid: { display: "grid" },
      inlineGrid: { display: "inline-grid" },
      inherit: { display: "inherit" },
      initial: { display: "initial" },
    },
  },

  responsiveVariants: ["xs", "sm", "md", "lg", "xl"],
});

export type BoxVariants = NonNullable<HomemadeRecipeVariants<typeof boxRecipe>>;
