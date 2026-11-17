import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const iconButton = homemadeRecipe({
  base: {
    alignItems: "center",
    borderWidth: theme.border.width.default,
    borderStyle: theme.border.style.default,
    borderRadius: theme.radii[2],
    display: "flex",
    flexShrink: 0,
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
