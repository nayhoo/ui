import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { panel } from "@/theme/styles/panel.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const dialogContentRecipe = homemadeRecipe({
  base: [
    panel,
    {
      border: `1px solid ${theme.colors.line}`,
      boxShadow: "none",

      left: "50%",
      marginTop: "-5vh",
      maxHeight: "85vh",
      minWidth: 200,
      overflow: "auto",
      position: "fixed",
      top: "50%",
      transform: "translate(-50%, -50%)",
      willChange: "transform",

      zIndex: theme.zIndices[5],

      selectors: {
        "&:focus": {
          outline: "none",
        },
      },
    },
  ],

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
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

export type DialogContentVariants = HomemadeRecipeVariants<
  typeof dialogContentRecipe
>;
