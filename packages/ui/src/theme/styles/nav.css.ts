import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";

export const nav = homemadeRecipe({
  base: {
    backgroundColor: theme.color.container.primary.background,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    top: 0,
    width: "100%",
    zIndex: theme.zIndex[4],
  },

  variants: {
    compact: {
      true: {
        borderColor: theme.color.separable.primary.borderColor,
      },
      false: {
        borderColor: "transparent",
        paddingBottom: theme.space[2],
        paddingTop: theme.space[2],
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
