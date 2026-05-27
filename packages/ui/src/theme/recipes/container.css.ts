import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";
import { homemadeRecipe } from "../homemade-recipe.css";

export const containerRecipe = homemadeRecipe({
  base: {
    boxSizing: "border-box",
    flexShrink: 0,

    marginLeft: "auto",
    marginRight: "auto",

    paddingLeft: theme.space[5],
    paddingRight: theme.space[5],
  },

  variants: {
    size: {
      "1": {
        maxWidth: "430px",
      },
      "2": {
        maxWidth: "715px",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "none",
      },
    },
  },

  defaultVariants: {
    size: "4",
  },
});

export type ContainerVariants = NonNullable<
  HomemadeRecipeVariants<typeof containerRecipe>
>;
