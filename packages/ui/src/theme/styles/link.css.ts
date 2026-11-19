import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const link = homemadeRecipe({
  base: {
    color: theme.color.text.brand.default,
    fontFamily: theme.fontFamily.text,
    textDecorationColor: "currentColor",
    textDecorationLine: "none",
    textUnderlineOffset: "2px",

    selectors: {
      "&:hover": {
        cursor: "pointer",
        textDecorationLine: "underline",
      },
      "&:visited": {
        color: theme.color.text.visited,
      },
      "&:focus-visible": {
        outlineColor: theme.color.border.focused,
        outlineStyle: theme.border.style.focused,
        outlineWidth: theme.border.width.focused,
        outlineOffset: "2px",
      },
    },
  },

  variants: {
    size: {
      inherit: {
        fontSize: "inherit",
        letterSpacing: "inherit",
        lineHeight: "inherit",
      },
      "1": {
        fontSize: theme.fontSize[1],
        letterSpacing: theme.letterSpacing[1],
        lineHeight: theme.lineHeight[1],
      },
      "2": {
        fontSize: theme.fontSize[2],
        letterSpacing: theme.letterSpacing[2],
        lineHeight: theme.lineHeight[2],
      },
      "3": {
        fontSize: theme.fontSize[3],
        letterSpacing: theme.letterSpacing[3],
        lineHeight: theme.lineHeight[3],
      },
    },
  },

  defaultVariants: {
    size: "inherit",
  },
});

export type LinkVariants = NonNullable<HomemadeRecipeVariants<typeof link>>;
