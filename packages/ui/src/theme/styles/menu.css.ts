import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";
import { homemadeRecipe } from "../../lib/homemade-recipe.css";

export const menuLabel = style({
  display: "flex",
  justifyContent: "center",
  color: theme.color.content.subtle.foreground,
  fontSize: theme.fontSize[1],
  letterSpacing: theme.letterSpacing[1],
  lineHeight: theme.lineHeight[1],
  fontFamily: theme.fontFamily.text,
  fontVariantNumeric: "tabular-nums",
  marginBottom: theme.space[2],
  marginTop: theme.space[2],
});

export const menuContent = homemadeRecipe({
  base: {
    boxSizing: "border-box",
    minWidth: 120,
    padding: theme.space[1],
  },

  variants: {
    /** Whether or not z-index is set to max */
    onTop: {
      true: {
        zIndex: theme.zIndex.max,
      },
      false: {
        zIndex: theme.zIndex[2],
      },
    },
  },

  defaultVariants: {
    onTop: false,
  },
});

export type MenuContentVariants = HomemadeRecipeVariants<typeof menuContent>;

export const menuSeparator = style({
  backgroundColor: theme.color.separable.secondary.borderColor,
  marginBottom: theme.space[1],
  marginTop: theme.space[1],
  height: 1,
  width: "100%",
});
