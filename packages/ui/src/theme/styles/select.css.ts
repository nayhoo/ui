import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const selectTrigger = homemadeRecipe({
  base: {
    alignItems: "center",
    borderWidth: theme.border.width.default,
    borderStyle: theme.border.style.default,
    borderRadius: theme.radii[2],
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: theme.fontFamily.text,
    fontVariantNumeric: "tabular-nums",
    fontWeight: theme.fontWeight.medium,
    justifyContent: "center",
    position: "relative",
    transitionProperty: "background-color, color, border-color",
    transitionDuration: "100ms",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    textDecoration: "none",

    selectors: {
      "&:hover": {
        cursor: "pointer",
      },
      "&:disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "&:focus-visible": {
        outlineColor: theme.color.border.focused,
        outlineStyle: theme.border.style.focused,
        outlineWidth: theme.border.width.focused,
        outlineOffset: "2px",
      },
      "&[data-placeholder]": {
        color: theme.color.text.subtle,
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
    variant: {
      bordered: {
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.neutral.default,
        borderColor: theme.color.border.neutral,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.neutral.hovered,
            color: theme.color.text.neutral.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.neutral.pressed,
            color: theme.color.text.default,
          },
        },
      },
      ghost: {
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.neutral.default,
        borderColor: theme.color.border.ghost,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.hovered,
            color: theme.color.text.neutral.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.pressed,
            color: theme.color.text.default,
          },
        },
      },
    },
  },

  defaultVariants: {
    size: "2",
    variant: "bordered",
  },
});

export type SelectTriggerVariants = HomemadeRecipeVariants<
  typeof selectTrigger
>;

export const itemIndicator = style({
  position: "absolute",
  left: 0,
  width: "25px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const scrollButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: theme.space[5],
  backgroundColor: theme.color.background.ghost.default,
  color: theme.color.text.brand.default,
  cursor: "default",
});
