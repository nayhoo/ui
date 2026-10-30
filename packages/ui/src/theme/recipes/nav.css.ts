import { homemadeRecipe } from "../homemade-recipe.css";
import { theme } from "../theme-contracts";

export const navRecipe = homemadeRecipe({
  base: {
    borderBottom: "1px solid",

    top: 0,
    width: "100%",
    zIndex: theme.zIndices[4],
    backgroundColor: theme.colors.background,
  },

  variants: {
    compact: {
      true: {
        borderColor: theme.colors.line,
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
