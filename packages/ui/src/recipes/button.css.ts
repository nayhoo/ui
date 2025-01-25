import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: {
    all: "unset",
    alignItems: "center",
    boxSizing: "border-box",
    userSelect: "none",

    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

    fontFamily: theme.fonts.text,
    fontWeight: theme.fontWeights.medium,
    fontVariantNumeric: "tabular-nums",

    transition: "all 100ms",

    selectors: {
      "&::before": {
        boxSizing: "border-box",
      },
      "&::after": {
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
    color: {
      primary: {},
      secondary: {},
      error: {},
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    loading: {
      true: {
        color: "transparent !important",
      },
    },
    shape: {
      square: {},
      pill: {
        borderRadius: theme.radii.full,
      },
    },
    size: {
      "1": {
        borderRadius: theme.radii[1],
        height: theme.sizes[5],
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        fontSize: theme.fontSizes[1],
        lineHeight: theme.sizes[5],
      },
      "2": {
        borderRadius: theme.radii[2],
        height: theme.sizes[6],
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],
        fontSize: theme.fontSizes[3],
        lineHeight: theme.lineHeights[6],
      },
      "3": {
        borderRadius: theme.radii[2],
        height: theme.sizes[7],
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
        fontSize: theme.fontSizes[4],
        lineHeight: theme.sizes[7],
      },
    },
    variant: {
      default: {
        // boxShadow: `${vars.colors.slate.slate8} 0px 10px 38px -10px, ${vars.colors.slate.slate8} 0px 10px 20px -15px`,

        selectors: {
          "&:hover": {},
          "&:active": {},
        },
      },
      outline: {
        boxShadow: `inset 0 0 0 1px ${theme.semanticColors.line}`,

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.transparentHover,
          },
          "&:active": {
            backgroundColor: theme.semanticColors.transparentActive,
          },
          "&:focus": {
            boxShadow: `inset 0 0 0 1px ${theme.colors.slateA.slateA8}, 0 0 0 1px ${theme.colors.slateA.slateA8}`,
          },
        },
      },
      ghost: {
        backgroundColor: "transparent",

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.transparentHover,
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: theme.semanticColors.transparentActive,
          },
          "&:focus": {
            boxShadow: `inset 0 0 0 1px ${theme.colors.slateA.slateA8}, 0 0 0 1px ${theme.colors.slateA.slateA8}`,
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        variant: "default",
        color: "primary",
      },
      style: {
        backgroundColor: theme.semanticColors.primary, // remember this 9 is button base
        color: theme.semanticColors.primaryTextContrast,

        selectors: {
          "&:hover": {
            // might be better to just calc this
            backgroundColor: theme.semanticColors.primaryLighter, // remember this 10 is button hover
          },
          "&:active": {
            backgroundColor: theme.semanticColors.primaryLighter, // remember this 10 + filter is button press
            filter: "brightness(0.92) saturate(1.1) ",
          },
        },
      },
    },
    {
      variants: {
        variant: "default",
        color: "secondary",
      },
      style: {
        backgroundColor: theme.semanticColors.secondary,
        color: theme.semanticColors.secondaryTextContrast,

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.secondaryLighter,
          },
          "&:active": {
            backgroundColor: theme.semanticColors.secondaryLighter,
            filter: "brightness(0.92) saturate(1.1) ",
          },
        },
      },
    },
    {
      variants: {
        variant: "default",
        color: "error",
      },
      style: {
        backgroundColor: theme.semanticColors.error,
        color: theme.semanticColors.errorTextContrast,

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.errorLighter,
          },
          "&:active": {
            backgroundColor: theme.semanticColors.errorLighter,
            filter: "brightness(0.92) saturate(1.1) ",
          },
        },
      },
    },
  ],

  defaultVariants: {
    color: "primary",
    size: "2",
    variant: "default",
  },
});

// Get the type
export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
