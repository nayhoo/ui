import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";
import { homemadeRecipe } from "../../lib/homemade-recipe.css";

export const menuLabel = homemadeRecipe({
  base: {
    alignItems: "center",
    color: theme.color.text.subtle,
    display: "flex",
    fontFamily: theme.fontFamily.text,
    fontVariantNumeric: "tabular-nums",
    paddingLeft: "25px",
  },

  variants: {
    size: {
      "1": {
        fontSize: theme.fontSize[1],
        letterSpacing: theme.letterSpacing[1],
        lineHeight: theme.lineHeight[1],
        height: theme.space[5],
      },
      "2": {
        fontSize: theme.fontSize[2],
        letterSpacing: theme.letterSpacing[2],
        lineHeight: theme.lineHeight[2],
        height: theme.space[6],
      },
    },
  },

  defaultVariants: {
    size: "2",
  },
});

export const menuContent = homemadeRecipe({
  base: {
    minWidth: 120,
    padding: theme.space[1],
  },

  variants: {
    onOverlay: {
      true: {
        // +1 nice
        zIndex: `calc(${theme.zIndex[5]} + 1)`,
      },
      false: {
        zIndex: theme.zIndex[2],
      },
    },
  },

  defaultVariants: {
    onOverlay: false,
  },
});

export type MenuContentVariants = HomemadeRecipeVariants<typeof menuContent>;

export const menuItem = homemadeRecipe({
  base: {
    alignItems: "center",
    borderRadius: theme.radii[2],
    display: "flex",
    flexShrink: 0,
    fontFamily: theme.fontFamily.text,
    fontVariantNumeric: "tabular-nums",
    position: "relative",
    transitionProperty: "background-color, color, border-color",
    transitionDuration: "100ms",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    textDecoration: "none",
    backgroundColor: theme.color.background.ghost.default,
    color: theme.color.text.brand.default,
    borderColor: theme.color.border.ghost,
    paddingLeft: "25px !important",
    justifyContent: "space-between",

    selectors: {
      "&[data-disabled]": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "&[data-highlighted]": {
        backgroundColor: theme.color.background.ghost.hovered,
        color: theme.color.text.brand.hovered,
      },
      "&:active:not([data-disabled])": {
        backgroundColor: theme.color.background.ghost.pressed,
        color: theme.color.text.default,
      },
      "&:focus-visible": {
        backgroundColor: theme.color.background.ghost.hovered,
        color: theme.color.text.brand.hovered,
      },
    },
  },

  variants: {
    size: {
      "1": {
        fontSize: theme.fontSize[1],
        letterSpacing: theme.letterSpacing[1],
        lineHeight: theme.lineHeight[1],
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        height: theme.space[5],
        gap: theme.space[1],
      },
      "2": {
        fontSize: theme.fontSize[2],
        letterSpacing: theme.letterSpacing[2],
        lineHeight: theme.lineHeight[2],
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],
        height: theme.space[6],
        gap: theme.space[2],
      },
    },
  },

  defaultVariants: {
    size: "2",
  },
});

export type MenuItemVariants = HomemadeRecipeVariants<typeof menuItem>;

export const menuSeparator = style({
  backgroundColor: theme.color.border.default,
  marginBottom: theme.space[1],
  marginTop: theme.space[1],
  height: theme.border.width.default,
  width: "100%",
});
