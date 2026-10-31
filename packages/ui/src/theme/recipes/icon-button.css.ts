import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import * as colors from "@radix-ui/colors";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const iconButtonRecipe = homemadeRecipe({
  base: {
    alignItems: "center",
    appearance: "none",
    borderWidth: "0",
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: "inherit",
    fontSize: "14px",
    justifyContent: "center",
    lineHeight: "1",
    outline: "none",
    padding: "0",
    textDecoration: "none",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",

    transition: "all 100ms",

    color: "currentColor",

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
        backgroundColor: colors.slate.slate2,
        boxShadow: `inset 0 0 0 1px ${colors.slateA.slateA7}`,
        // boxShadow: "none",
        color: colors.slate.slate8,
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
  },

  variants: {
    loading: {
      true: {
        color: "transparent !important",
      },
    },
    size: {
      sm: {
        borderRadius: theme.radii[1],
        height: theme.sizes[5],
        width: theme.sizes[5],
      },
      md: {
        borderRadius: theme.radii[2],
        height: theme.sizes[6],
        width: theme.sizes[6],
      },
      lg: {
        borderRadius: theme.radii[2],
        height: theme.sizes[7],
        width: theme.sizes[7],
      },
    },
    variant: {
      ghost: {
        backgroundColor: "transparent",

        selectors: {
          "&:hover": {
            backgroundColor: theme.colors.transparentHover,
          },
          "&:active": {
            backgroundColor: theme.colors.transparentActive,
          },
        },
      },
      outline: {
        backgroundColor: "transparent",
        boxShadow: `inset 0 0 0 1px ${theme.colors.line}`,

        selectors: {
          "&:hover": {
            backgroundColor: theme.colors.transparentHover,
          },
          "&:active": {
            backgroundColor: theme.colors.transparentActive,
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
    size: "md",
    variant: "ghost",
  },
});

// Get the type
export type IconButtonVariants = HomemadeRecipeVariants<
  typeof iconButtonRecipe
>;
