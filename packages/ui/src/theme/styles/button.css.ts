import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const button = homemadeRecipe({
  base: {
    all: "unset",

    alignItems: "center",
    border: "1px solid",
    borderRadius: theme.radii[2],
    boxSizing: "border-box",
    display: "flex",
    flexShrink: 0,
    fontFamily: theme.fontFamily.text,
    fontVariantNumeric: "tabular-nums",
    fontWeight: theme.fontWeight.medium,
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
      "&:disabled, &[data-disabled]": {
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
        cursor: "progress",
      },
    },
    size: {
      "1": {
        fontSize: theme.fontSize[1],
        letterSpacing: theme.letterSpacing[1],
        lineHeight: theme.lineHeight[1],
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        height: theme.space[5],
        gap: theme.space[1],
      },
      "2": {
        fontSize: theme.fontSize[2],
        letterSpacing: theme.letterSpacing[2],
        lineHeight: theme.lineHeight[2],
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],
        height: theme.space[6],
        gap: theme.space[2],
      },
      "3": {
        fontSize: theme.fontSize[3],
        letterSpacing: theme.letterSpacing[3],
        lineHeight: theme.lineHeight[3],
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
        height: theme.space[7],
        gap: theme.space[2],
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
    round: {
      true: {
        borderRadius: theme.radii.full,
      },
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
          theme.color.actionable.accented.solid.background.initial,
        color: theme.color.actionable.accented.solid.foreground.initial,
        borderColor: theme.color.actionable.accented.solid.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            background: theme.color.actionable.accented.solid.background.hover,
            color: theme.color.actionable.accented.solid.foreground.hover,
            borderColor:
              theme.color.actionable.accented.solid.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.accented.solid.background.active,
            color: theme.color.actionable.accented.solid.foreground.active,
            borderColor:
              theme.color.actionable.accented.solid.borderColor.active,
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
          theme.color.actionable.accented.bordered.background.initial,
        color: theme.color.actionable.accented.bordered.foreground.initial,
        borderColor:
          theme.color.actionable.accented.bordered.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.accented.bordered.background.hover,
            color: theme.color.actionable.accented.bordered.foreground.hover,
            borderColor:
              theme.color.actionable.accented.bordered.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.accented.bordered.background.active,
            color: theme.color.actionable.accented.bordered.foreground.active,
            borderColor:
              theme.color.actionable.accented.bordered.borderColor.active,
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
          theme.color.actionable.accented.ghost.background.initial,
        color: theme.color.actionable.accented.ghost.foreground.initial,
        borderColor: theme.color.actionable.accented.ghost.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.accented.ghost.background.hover,
            color: theme.color.actionable.accented.ghost.foreground.hover,
            borderColor:
              theme.color.actionable.accented.ghost.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.accented.ghost.background.active,
            color: theme.color.actionable.accented.ghost.foreground.active,
            borderColor:
              theme.color.actionable.accented.ghost.borderColor.active,
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
          theme.color.actionable.neutral.solid.background.initial,
        color: theme.color.actionable.neutral.solid.foreground.initial,
        borderColor: theme.color.actionable.neutral.solid.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            background: theme.color.actionable.neutral.solid.background.hover,
            color: theme.color.actionable.neutral.solid.foreground.hover,
            borderColor: theme.color.actionable.neutral.solid.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.neutral.solid.background.active,
            color: theme.color.actionable.neutral.solid.foreground.active,
            borderColor:
              theme.color.actionable.neutral.solid.borderColor.active,
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
          theme.color.actionable.neutral.bordered.background.initial,
        color: theme.color.actionable.neutral.bordered.foreground.initial,
        borderColor:
          theme.color.actionable.neutral.bordered.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.neutral.bordered.background.hover,
            color: theme.color.actionable.neutral.bordered.foreground.hover,
            borderColor:
              theme.color.actionable.neutral.bordered.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.neutral.bordered.background.active,
            color: theme.color.actionable.neutral.bordered.foreground.active,
            borderColor:
              theme.color.actionable.neutral.bordered.borderColor.active,
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
          theme.color.actionable.neutral.ghost.background.initial,
        color: theme.color.actionable.neutral.ghost.foreground.initial,
        borderColor: theme.color.actionable.neutral.ghost.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.neutral.ghost.background.hover,
            color: theme.color.actionable.neutral.ghost.foreground.hover,
            borderColor: theme.color.actionable.neutral.ghost.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.neutral.ghost.background.active,
            color: theme.color.actionable.neutral.ghost.foreground.active,
            borderColor:
              theme.color.actionable.neutral.ghost.borderColor.active,
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
          theme.color.actionable.caution.solid.background.initial,
        color: theme.color.actionable.caution.solid.foreground.initial,
        borderColor: theme.color.actionable.caution.solid.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            background: theme.color.actionable.caution.solid.background.hover,
            color: theme.color.actionable.caution.solid.foreground.hover,
            borderColor: theme.color.actionable.caution.solid.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.caution.solid.background.active,
            color: theme.color.actionable.caution.solid.foreground.active,
            borderColor:
              theme.color.actionable.caution.solid.borderColor.active,
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
          theme.color.actionable.caution.bordered.background.initial,
        color: theme.color.actionable.caution.bordered.foreground.initial,
        borderColor:
          theme.color.actionable.caution.bordered.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.caution.bordered.background.hover,
            color: theme.color.actionable.caution.bordered.foreground.hover,
            borderColor:
              theme.color.actionable.caution.bordered.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.caution.bordered.background.active,
            color: theme.color.actionable.caution.bordered.foreground.active,
            borderColor:
              theme.color.actionable.caution.bordered.borderColor.active,
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
          theme.color.actionable.caution.ghost.background.initial,
        color: theme.color.actionable.caution.ghost.foreground.initial,
        borderColor: theme.color.actionable.caution.ghost.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.caution.ghost.background.hover,
            color: theme.color.actionable.caution.ghost.foreground.hover,
            borderColor: theme.color.actionable.caution.ghost.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.caution.ghost.background.active,
            color: theme.color.actionable.caution.ghost.foreground.active,
            borderColor:
              theme.color.actionable.caution.ghost.borderColor.active,
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
          theme.color.actionable.negative.solid.background.initial,
        color: theme.color.actionable.negative.solid.foreground.initial,
        borderColor: theme.color.actionable.negative.solid.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            background: theme.color.actionable.negative.solid.background.hover,
            color: theme.color.actionable.negative.solid.foreground.hover,
            borderColor:
              theme.color.actionable.negative.solid.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.negative.solid.background.active,
            color: theme.color.actionable.negative.solid.foreground.active,
            borderColor:
              theme.color.actionable.negative.solid.borderColor.active,
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
          theme.color.actionable.negative.bordered.background.initial,
        color: theme.color.actionable.negative.bordered.foreground.initial,
        borderColor:
          theme.color.actionable.negative.bordered.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.negative.bordered.background.hover,
            color: theme.color.actionable.negative.bordered.foreground.hover,
            borderColor:
              theme.color.actionable.negative.bordered.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.negative.bordered.background.active,
            color: theme.color.actionable.negative.bordered.foreground.active,
            borderColor:
              theme.color.actionable.negative.bordered.borderColor.active,
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
          theme.color.actionable.negative.ghost.background.initial,
        color: theme.color.actionable.negative.ghost.foreground.initial,
        borderColor: theme.color.actionable.negative.ghost.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.negative.ghost.background.hover,
            color: theme.color.actionable.negative.ghost.foreground.hover,
            borderColor:
              theme.color.actionable.negative.ghost.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.negative.ghost.background.active,
            color: theme.color.actionable.negative.ghost.foreground.active,
            borderColor:
              theme.color.actionable.negative.ghost.borderColor.active,
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
          theme.color.actionable.positive.solid.background.initial,
        color: theme.color.actionable.positive.solid.foreground.initial,
        borderColor: theme.color.actionable.positive.solid.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            background: theme.color.actionable.positive.solid.background.hover,
            color: theme.color.actionable.positive.solid.foreground.hover,
            borderColor:
              theme.color.actionable.positive.solid.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.positive.solid.background.active,
            color: theme.color.actionable.positive.solid.foreground.active,
            borderColor:
              theme.color.actionable.positive.solid.borderColor.active,
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
          theme.color.actionable.positive.bordered.background.initial,
        color: theme.color.actionable.positive.bordered.foreground.initial,
        borderColor:
          theme.color.actionable.positive.bordered.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.positive.bordered.background.hover,
            color: theme.color.actionable.positive.bordered.foreground.hover,
            borderColor:
              theme.color.actionable.positive.bordered.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.positive.bordered.background.active,
            color: theme.color.actionable.positive.bordered.foreground.active,
            borderColor:
              theme.color.actionable.positive.bordered.borderColor.active,
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
          theme.color.actionable.positive.ghost.background.initial,
        color: theme.color.actionable.positive.ghost.foreground.initial,
        borderColor: theme.color.actionable.positive.ghost.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.positive.ghost.background.hover,
            color: theme.color.actionable.positive.ghost.foreground.hover,
            borderColor:
              theme.color.actionable.positive.ghost.borderColor.hover,
          },
          "&:active:not(:disabled, [data-disabled])": {
            backgroundColor:
              theme.color.actionable.positive.ghost.background.active,
            color: theme.color.actionable.positive.ghost.foreground.active,
            borderColor:
              theme.color.actionable.positive.ghost.borderColor.active,
          },
        },
      },
    },
  ],

  defaultVariants: {
    size: "2",
    sentiment: "neutral",
    variant: "bordered",
  },
});

export type ButtonVariants = HomemadeRecipeVariants<typeof button>;

export const buttonIconRecipe = homemadeRecipe({
  base: {
    marginLeft: theme.space[1],
    marginRight: theme.space[1],
  },

  variants: {
    size: {
      "1": {
        height: theme.fontSize[2],
        width: theme.fontSize[2],
      },
      "2": {
        height: theme.fontSize[3],
        width: theme.fontSize[3],
      },
      "3": {
        height: theme.fontSize[4],
        width: theme.fontSize[4],
      },
    },
  },
});
