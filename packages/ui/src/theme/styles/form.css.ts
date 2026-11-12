import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const formMessageRecipe = homemadeRecipe({
  base: {
    fontSize: theme.fontSize[2],
    opacity: 0.8,
  },

  variants: {
    error: {
      true: {
        // color: theme.color.error.error9,
      },
    },
  },
  defaultVariants: {},
});

export type FormMessageVariants = NonNullable<
  HomemadeRecipeVariants<typeof formMessageRecipe>
>;

export const formField = style({
  display: "grid",
  marginBottom: theme.space[2],
});

export const formLabel = style({
  // color: theme.color.textSubtle,
  fontSize: theme.fontSize[3],
  fontWeight: theme.fontWeight.medium,
  lineHeight: theme.lineHeight[6],
});
