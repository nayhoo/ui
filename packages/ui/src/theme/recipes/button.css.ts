import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";
import { homemadeRecipe } from "../homemade-recipe.css";

export const buttonRecipe = homemadeRecipe({
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

    position: "relative",

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
        color: theme.colors.slate.slate8,
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
  },

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
      false: {
        width: "unset",
      },
    },
    loading: {
      true: {
        color: "transparent !important",
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

        selectors: {
          "&[data-left-icon]": {
            paddingLeft: 0,
          },
          "&[data-right-icon]": {
            paddingRight: 0,
          },
        },
      },
      "2": {
        borderRadius: theme.radii[2],
        height: theme.sizes[6],
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],
        fontSize: theme.fontSizes[3],
        lineHeight: theme.lineHeights[6],

        selectors: {
          "&[data-left-icon]": {
            paddingLeft: theme.space[1],
          },
          "&[data-right-icon]": {
            paddingRight: theme.space[1],
          },
        },
      },
      "3": {
        borderRadius: theme.radii[2],
        height: theme.sizes[7],
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
        fontSize: theme.fontSizes[4],
        lineHeight: theme.sizes[7],

        selectors: {
          "&[data-left-icon]": {
            paddingLeft: theme.space[2],
          },
          "&[data-right-icon]": {
            paddingRight: theme.space[2],
          },
        },
      },
    },
    variant: {
      primary: {
        backgroundColor: theme.semanticColors.primary.primary4,
        color: theme.semanticColors.primary.primary11,

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.primary.primary5,
          },
          "&:active": {
            backgroundColor: theme.semanticColors.primary.primary6,
          },
        },
      },
      secondary: {
        backgroundColor: theme.semanticColors.secondary.secondary4,
        color: theme.semanticColors.secondary.secondary11,

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.secondary.secondary5,
          },
          "&:active": {
            backgroundColor: theme.semanticColors.secondary.secondary6,
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
      error: {
        backgroundColor: theme.semanticColors.error.error4,
        color: theme.semanticColors.error.error11,

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.error.error5,
          },
          "&:active": {
            backgroundColor: theme.semanticColors.error.error6,
          },
        },
      },
      success: {
        backgroundColor: theme.semanticColors.success.success4,
        color: theme.semanticColors.success.success11,

        selectors: {
          "&:hover": {
            backgroundColor: theme.semanticColors.success.success5,
          },
          "&:active": {
            backgroundColor: theme.semanticColors.success.success6,
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

  responsiveVariants: ["sm"],

  defaultVariants: {
    size: "2",
    variant: "primary",
  },
});

// Get the type
export type ButtonVariants = HomemadeRecipeVariants<typeof buttonRecipe>;

export const buttonIconRecipe = homemadeRecipe({
  base: {
    marginLeft: theme.space[1],
    marginRight: theme.space[1],
  },

  variants: {
    size: {
      "1": {
        height: theme.fontSizes[2],
        width: theme.fontSizes[2],
      },
      "2": {
        height: theme.fontSizes[4],
        width: theme.fontSizes[4],
      },
      "3": {
        height: theme.fontSizes[5],
        width: theme.fontSizes[5],
      },
    },
  },
});

export const buttonSpinner = style({
  position: "absolute",
  left: 0,
  right: 0,
  margin: "auto",
});
