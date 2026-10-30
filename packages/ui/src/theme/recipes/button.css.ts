import { theme } from "@/theme/theme-contracts/theme-contract.css";
import * as colors from "@radix-ui/colors";
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
        backgroundColor: colors.slate.slate2,
        boxShadow: `inset 0 0 0 1px ${colors.slateA.slateA7}`,
        color: colors.slate.slate8,
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
        backgroundColor: theme.colors.primary.primary4,
        color: theme.colors.primary.primary11,

        selectors: {
          "&:hover": {
            backgroundColor: theme.colors.primary.primary5,
          },
          "&:active": {
            backgroundColor: theme.colors.primary.primary6,
          },
        },
      },
      secondary: {
        backgroundColor: theme.colors.secondary.secondary4,
        color: theme.colors.secondary.secondary11,

        selectors: {
          "&:hover": {
            backgroundColor: theme.colors.secondary.secondary5,
          },
          "&:active": {
            backgroundColor: theme.colors.secondary.secondary6,
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
      error: {
        backgroundColor: theme.colors.error.error4,
        color: theme.colors.error.error11,

        selectors: {
          "&:hover": {
            backgroundColor: theme.colors.error.error5,
          },
          "&:active": {
            backgroundColor: theme.colors.error.error6,
          },
        },
      },
      success: {
        backgroundColor: theme.colors.success.success4,
        color: theme.colors.success.success11,

        selectors: {
          "&:hover": {
            backgroundColor: theme.colors.success.success5,
          },
          "&:active": {
            backgroundColor: theme.colors.success.success6,
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
