import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const buttonRecipe = homemadeRecipe({
  base: {
    alignItems: "center",
    all: "unset",
    border: "1px solid",
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: theme.fonts.text,
    fontVariantNumeric: "tabular-nums",
    fontWeight: theme.fontWeights.medium,
    justifyContent: "center",
    position: "relative",
    transition: "all 100ms",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

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
        opacity: 0.4,
        cursor: "not-allowed",
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
        backgroundColor: "transparent !important",
        cursor: "progress",
      },
    },
    size: {
      sm: {
        borderRadius: theme.radii[1],
        fontSize: theme.fontSizes[2],
        height: theme.sizes[5],
        lineHeight: theme.sizes[5],
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],

        selectors: {
          "&[data-left-icon]": {
            paddingLeft: 0,
          },
          "&[data-right-icon]": {
            paddingRight: 0,
          },
        },
      },
      md: {
        borderRadius: theme.radii[2],
        fontSize: theme.fontSizes[3],
        height: theme.sizes[6],
        lineHeight: theme.lineHeights[6],
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],

        selectors: {
          "&[data-left-icon]": {
            paddingLeft: theme.space[1],
          },
          "&[data-right-icon]": {
            paddingRight: theme.space[1],
          },
        },
      },
      lg: {
        borderRadius: theme.radii[3],
        fontSize: theme.fontSizes[4],
        height: theme.sizes[7],
        lineHeight: theme.sizes[7],
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],

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
    sentiment: {
      accented: {},
      neutral: {},
      positive: {},
      caution: {},
      negative: {},
    },
    variant: {
      solid: {},
      bordered: {},
      ghost: {},
    },
  },

  compoundVariants: [
    {
      variants: {
        sentiment: "accented",
        variant: "solid",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.accented.solid.background.initial,
        color: theme.colors.actionable.accented.solid.foreground.initial,
        borderColor: theme.colors.actionable.accented.solid.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.accented.solid.background.hover,
            color: theme.colors.actionable.accented.solid.foreground.hover,
            borderColor:
              theme.colors.actionable.accented.solid.borderColor.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.accented.solid.background.active,
            color: theme.colors.actionable.accented.solid.foreground.active,
            borderColor:
              theme.colors.actionable.accented.solid.borderColor.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "accented",
        variant: "bordered",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.accented.bordered.background.initial,
        color: theme.colors.actionable.accented.bordered.foreground.initial,
        borderColor:
          theme.colors.actionable.accented.bordered.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.accented.bordered.background.hover,
            color: theme.colors.actionable.accented.bordered.foreground.hover,
            borderColor:
              theme.colors.actionable.accented.bordered.borderColor.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.accented.bordered.background.active,
            color: theme.colors.actionable.accented.bordered.foreground.active,
            borderColor:
              theme.colors.actionable.accented.bordered.borderColor.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "accented",
        variant: "ghost",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.accented.ghost.background.initial,
        color: theme.colors.actionable.accented.ghost.foreground.initial,
        borderColor: theme.colors.actionable.accented.ghost.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.accented.ghost.background.hover,
            color: theme.colors.actionable.accented.ghost.foreground.hover,
            borderColor:
              theme.colors.actionable.accented.ghost.borderColor.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.accented.ghost.background.active,
            color: theme.colors.actionable.accented.ghost.foreground.active,
            borderColor:
              theme.colors.actionable.accented.ghost.borderColor.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "neutral",
        variant: "solid",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.neutral.solid.background.initial,
        color: theme.colors.actionable.neutral.solid.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.neutral.solid.background.hover,
            color: theme.colors.actionable.neutral.solid.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.neutral.solid.background.active,
            color: theme.colors.actionable.neutral.solid.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "neutral",
        variant: "bordered",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.neutral.bordered.background.initial,
        color: theme.colors.actionable.neutral.bordered.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.neutral.bordered.background.hover,
            color: theme.colors.actionable.neutral.bordered.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.neutral.bordered.background.active,
            color: theme.colors.actionable.neutral.bordered.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "neutral",
        variant: "ghost",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.neutral.ghost.background.initial,
        color: theme.colors.actionable.neutral.ghost.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.neutral.ghost.background.hover,
            color: theme.colors.actionable.neutral.ghost.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.neutral.ghost.background.active,
            color: theme.colors.actionable.neutral.ghost.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "caution",
        variant: "solid",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.caution.solid.background.initial,
        color: theme.colors.actionable.caution.solid.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.caution.solid.background.hover,
            color: theme.colors.actionable.caution.solid.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.caution.solid.background.active,
            color: theme.colors.actionable.caution.solid.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "caution",
        variant: "bordered",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.caution.bordered.background.initial,
        color: theme.colors.actionable.caution.bordered.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.caution.bordered.background.hover,
            color: theme.colors.actionable.caution.bordered.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.caution.bordered.background.active,
            color: theme.colors.actionable.caution.bordered.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "caution",
        variant: "ghost",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.caution.ghost.background.initial,
        color: theme.colors.actionable.caution.ghost.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.caution.ghost.background.hover,
            color: theme.colors.actionable.caution.ghost.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.caution.ghost.background.active,
            color: theme.colors.actionable.caution.ghost.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "negative",
        variant: "solid",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.negative.solid.background.initial,
        color: theme.colors.actionable.negative.solid.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.negative.solid.background.hover,
            color: theme.colors.actionable.negative.solid.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.negative.solid.background.active,
            color: theme.colors.actionable.negative.solid.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "negative",
        variant: "bordered",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.negative.bordered.background.initial,
        color: theme.colors.actionable.negative.bordered.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.negative.bordered.background.hover,
            color: theme.colors.actionable.negative.bordered.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.negative.bordered.background.active,
            color: theme.colors.actionable.negative.bordered.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "negative",
        variant: "ghost",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.negative.ghost.background.initial,
        color: theme.colors.actionable.negative.ghost.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.negative.ghost.background.hover,
            color: theme.colors.actionable.negative.ghost.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.negative.ghost.background.active,
            color: theme.colors.actionable.negative.ghost.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "positive",
        variant: "solid",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.positive.solid.background.initial,
        color: theme.colors.actionable.positive.solid.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.positive.solid.background.hover,
            color: theme.colors.actionable.positive.solid.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.positive.solid.background.active,
            color: theme.colors.actionable.positive.solid.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "positive",
        variant: "bordered",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.positive.bordered.background.initial,
        color: theme.colors.actionable.positive.bordered.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.positive.bordered.background.hover,
            color: theme.colors.actionable.positive.bordered.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.positive.bordered.background.active,
            color: theme.colors.actionable.positive.bordered.foreground.active,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "positive",
        variant: "ghost",
      },
      style: {
        backgroundColor:
          theme.colors.actionable.positive.ghost.background.initial,
        color: theme.colors.actionable.positive.ghost.foreground.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.positive.ghost.background.hover,
            color: theme.colors.actionable.positive.ghost.foreground.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.colors.actionable.positive.ghost.background.active,
            color: theme.colors.actionable.positive.ghost.foreground.active,
          },
        },
      },
    },
  ],

  defaultVariants: {
    size: "md",
    sentiment: "neutral",
    variant: "bordered",
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
      sm: {
        height: theme.fontSizes[2],
        width: theme.fontSizes[2],
      },
      md: {
        height: theme.fontSizes[3],
        width: theme.fontSizes[3],
      },
      lg: {
        height: theme.fontSizes[4],
        width: theme.fontSizes[4],
      },
    },
  },
});

export const buttonSpanRecipe = homemadeRecipe({
  variants: {
    loading: {
      true: {
        color: "transparent",
      },
    },
  },
});

export const buttonSpinner = style({
  bottom: 0,
  left: 0,
  margin: "auto",
  position: "absolute",
  top: 0,
  right: 0,
});
