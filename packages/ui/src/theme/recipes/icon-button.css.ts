import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const iconButtonRecipe = recipe({
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
        backgroundColor: theme.colors.slate.slate2,
        boxShadow: `inset 0 0 0 1px ${theme.colors.slateA.slateA7}`,
        // boxShadow: "none",
        color: theme.colors.slate.slate8,
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
      "1": {
        borderRadius: theme.radii[1],
        height: theme.sizes[5],
        width: theme.sizes[5],
      },
      "2": {
        borderRadius: theme.radii[2],
        height: theme.sizes[6],
        width: theme.sizes[6],
      },
      "3": {
        borderRadius: theme.radii[2],
        height: theme.sizes[7],
        width: theme.sizes[7],
      },
      "4": {
        borderRadius: theme.radii[3],
        height: theme.sizes[8],
        width: theme.sizes[8],
      },
    },
    variant: {
      ghost: {
        backgroundColor: "transparent",

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.transparentHover,
          },
          "&:active": {
            backgroundColor: theme.semanticColors.transparentActive,
          },
        },
      },
      outline: {
        backgroundColor: "transparent",
        boxShadow: `inset 0 0 0 1px ${theme.semanticColors.line}`,

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.transparentHover,
          },
          "&:active": {
            backgroundColor: theme.semanticColors.transparentActive,
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
    size: "1",
    variant: "ghost",
  },
});

// Get the type
export type IconButtonVariants = RecipeVariants<typeof iconButtonRecipe>;
