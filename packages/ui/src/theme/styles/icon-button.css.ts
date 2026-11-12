import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const iconButton = homemadeRecipe({
  base: {
    all: "unset",

    alignItems: "center",
    border: "1px solid",
    borderRadius: theme.radii[2],
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontVariantNumeric: "tabular-nums",
    justifyContent: "center",
    padding: theme.space[1],
    position: "relative",
    transition: "all 100ms",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

    selectors: {
      "&::after": {
        boxSizing: "border-box",
      },
      "&::before": {
        boxSizing: "border-box",
      },
      "&:hover": {
        cursor: "pointer",
      },
      "&:disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    loading: {
      true: {
        cursor: "progress",
      },
    },
    size: {
      "1": {
        height: theme.space[5],
        width: theme.space[5],
      },
      "2": {
        height: theme.space[6],
        width: theme.space[6],
      },
      "3": {
        height: theme.space[7],
        width: theme.space[7],
      },
    },
    variant: {
      bordered: {
        backgroundColor:
          theme.color.actionable.neutral.bordered.background.initial,
        color: theme.color.actionable.neutral.bordered.foreground.initial,
        borderColor:
          theme.color.actionable.neutral.bordered.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.color.actionable.neutral.bordered.background.hover,
            color: theme.color.actionable.neutral.bordered.foreground.hover,
            borderColor:
              theme.color.actionable.neutral.bordered.borderColor.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.color.actionable.neutral.bordered.background.active,
            color: theme.color.actionable.neutral.bordered.foreground.active,
            borderColor:
              theme.color.actionable.neutral.bordered.borderColor.active,
          },
        },
      },
      ghost: {
        backgroundColor:
          theme.color.actionable.neutral.ghost.background.initial,
        color: theme.color.actionable.neutral.ghost.foreground.initial,
        borderColor: theme.color.actionable.neutral.ghost.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.color.actionable.neutral.ghost.background.hover,
            color: theme.color.actionable.neutral.ghost.foreground.hover,
            borderColor: theme.color.actionable.neutral.ghost.borderColor.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.color.actionable.neutral.ghost.background.active,
            color: theme.color.actionable.neutral.ghost.foreground.active,
            borderColor:
              theme.color.actionable.neutral.ghost.borderColor.active,
          },
        },
      },
    },
    round: {
      true: {
        borderRadius: theme.radii.full,
      },
    },
  },

  defaultVariants: {
    size: "2",
    variant: "bordered",
  },
});

// Get the type
export type IconButtonVariants = HomemadeRecipeVariants<typeof iconButton>;
