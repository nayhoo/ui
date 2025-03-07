import { theme } from "@/theme-contracts/theme-contract.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const checkboxRecipe = recipe({
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

    boxShadow: `inset 0 0 0 1px ${theme.semanticColors.line}`,
    overflow: "hidden",

    selectors: {
      "&:hover": {
        backgroundColor: theme.semanticColors.transparentHover,
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
        width: theme.sizes[3],
        height: theme.sizes[3],
        borderRadius: theme.radii[1],
      },
      "2": {
        width: theme.sizes[5],
        height: theme.sizes[5],
        borderRadius: theme.radii[2],
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

export type CheckboxVariants = NonNullable<
  RecipeVariants<typeof checkboxRecipe>
>;

export const checkboxIndicatorRecipe = recipe({
  base: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },

  variants: {},
  defaultVariants: {},
});

export type CheckboxIndicatorVariants = NonNullable<
  RecipeVariants<typeof checkboxIndicatorRecipe>
>;
