import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const checkboxIndicator = homemadeRecipe({
  base: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },

  variants: {
    size: {
      "1": {
        width: theme.space[3],
        height: theme.space[3],
      },
      "2": {
        width: theme.space[4],
        height: theme.space[4],
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

export const checkbox = homemadeRecipe({
  base: {
    alignItems: "center",
    appearance: "none",
    borderWidth: theme.border.width.default,
    borderStyle: theme.border.style.default,
    backgroundColor: theme.color.background.ghost.default,
    color: theme.color.text.default,
    borderColor: theme.color.border.neutral,
    display: "inline-flex",
    justifyContent: "center",
    lineHeight: "1",
    margin: "0",
    overflow: "hidden",
    padding: "0",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

    selectors: {
      "&:hover": {
        cursor: "pointer",
      },
      "&:disabled, &[data-disabled]": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "&:hover:not(:disabled)": {
        backgroundColor: theme.color.background.ghost.hovered,
        color: theme.color.text.neutral.hovered,
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
      "1": {
        width: theme.space[4],
        height: theme.space[4],
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
  HomemadeRecipeVariants<typeof checkbox>
>;
