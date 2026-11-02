import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";

export const navRecipe = homemadeRecipe({
  base: {
    borderBottom: "1px solid",

    top: 0,
    width: "100%",
    zIndex: theme.zIndex[4],
    backgroundColor: theme.color.background,
  },

  variants: {
    compact: {
      true: {
        borderColor: theme.color.line,
      },
      false: {
        paddingTop: theme.space[2],
        paddingBottom: theme.space[2],
        borderColor: "transparent",
      },
    },
    fixed: {
      true: {
        position: "fixed",
      },
      false: {
        position: "sticky",
      },
    },
  },

  responsiveVariants: ["xs"],

  defaultVariants: {
    compact: false,
    fixed: false,
  },
});
