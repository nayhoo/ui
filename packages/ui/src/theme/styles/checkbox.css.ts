import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const checkboxIndicator = style({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  width: "100%",
});

export const checkboxRecipe = homemadeRecipe({
  base: {
    all: "unset",
    boxSizing: "border-box",
    userSelect: "none",

    alignItems: "center",
    appearance: "none",
    display: "inline-flex",
    justifyContent: "center",
    lineHeight: "1",
    margin: "0",
    outline: "none",
    padding: "0",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

    // boxShadow: `inset 0 0 0 1px ${theme.color.line}`,
    overflow: "hidden",

    selectors: {
      "&:hover": {
        // backgroundColor: theme.color.transparentHover,
      },

      "&:focus": {
        outline: "none",
      },

      "&::before": {
        boxSizing: "border-box",
      },
      "&::after": {
        boxSizing: "border-box",
      },
    },
  },

  variants: {
    size: {
      "1": {
        width: theme.space[3],
        height: theme.space[3],
        borderRadius: theme.radii[1],
      },
      "2": {
        width: theme.space[5],
        height: theme.space[5],
        borderRadius: theme.radii[2],
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

export type CheckboxVariants = NonNullable<
  HomemadeRecipeVariants<typeof checkboxRecipe>
>;
