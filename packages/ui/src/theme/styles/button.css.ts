import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const button = homemadeRecipe({
  base: {
    alignItems: "center",
    borderWidth: theme.border.width.default,
    borderStyle: theme.border.style.default,
    borderRadius: theme.radii[2],
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: theme.fontFamily.text,
    fontVariantNumeric: "tabular-nums",
    fontWeight: theme.fontWeight.medium,
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
      "&:disabled, &[data-disabled]": {
        opacity: 0.4,
        cursor: "not-allowed",
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
    /**
     * @default false
     */
    fullWidth: {
      true: {
        width: "100%",
      },
      false: {
        width: "unset",
      },
    },
    /**
     * @default false
     */
    loading: {
      true: {
        cursor: "progress",
      },
    },
    /**
     * @default "2"
     */
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
    /**
     * @default "neutral"
     */
    sentiment: {
      brand: {},
      neutral: {},
      positive: {},
      caution: {},
      negative: {},
    },
    /**
     * @default "bordered"
     */
    variant: {
      solid: {},
      bordered: {},
      ghost: {},
    },
    /**
     * @default false
     */
    round: {
      true: {
        borderRadius: theme.radii.full,
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        sentiment: "brand",
        variant: "solid",
      },
      style: {
        backgroundColor: theme.color.background.brand.default,
        color: theme.color.text.onSolid,
        borderColor: theme.color.border.brand,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.brand.hovered,
            color: theme.color.text.default,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.brand.pressed,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "brand",
        variant: "bordered",
      },
      style: {
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.brand.default,
        borderColor: theme.color.border.brand,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.brand.hovered,
            color: theme.color.text.brand.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.brand.pressed,
            color: theme.color.text.default,
          },
        },
      },
    },
    {
      variants: {
        sentiment: "brand",
        variant: "ghost",
      },
      style: {
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.brand.default,
        borderColor: theme.color.border.ghost,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.hovered,
            color: theme.color.text.brand.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.pressed,
            color: theme.color.text.default,
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
        backgroundColor: theme.color.background.neutral.default,
        color: theme.color.text.onSolid,
        borderColor: theme.color.border.neutral,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.neutral.hovered,
            color: theme.color.text.default,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.neutral.pressed,
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
    },
    {
      variants: {
        sentiment: "neutral",
        variant: "ghost",
      },
      style: {
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
    {
      variants: {
        sentiment: "positive",
        variant: "solid",
      },
      style: {
        backgroundColor: theme.color.background.positive.default,
        color: theme.color.text.onSolid,
        borderColor: theme.color.border.positive,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.positive.hovered,
            color: theme.color.text.default,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.positive.pressed,
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
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.positive.default,
        borderColor: theme.color.border.positive,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.positive.hovered,
            color: theme.color.text.positive.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.positive.pressed,
            color: theme.color.text.default,
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
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.positive.default,
        borderColor: theme.color.border.ghost,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.hovered,
            color: theme.color.text.positive.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.pressed,
            color: theme.color.text.default,
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
        backgroundColor: theme.color.background.caution.default,
        color: theme.color.text.onSolid,
        borderColor: theme.color.border.caution,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.caution.hovered,
            color: theme.color.text.default,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.caution.pressed,
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
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.caution.default,
        borderColor: theme.color.border.caution,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.caution.hovered,
            color: theme.color.text.caution.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.caution.pressed,
            color: theme.color.text.default,
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
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.caution.default,
        borderColor: theme.color.border.ghost,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.hovered,
            color: theme.color.text.caution.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.pressed,
            color: theme.color.text.default,
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
        backgroundColor: theme.color.background.negative.default,
        color: theme.color.text.onSolid,
        borderColor: theme.color.border.negative,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.negative.hovered,
            color: theme.color.text.default,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.negative.pressed,
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
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.negative.default,
        borderColor: theme.color.border.negative,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.negative.hovered,
            color: theme.color.text.negative.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.negative.pressed,
            color: theme.color.text.default,
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
        backgroundColor: theme.color.background.ghost.default,
        color: theme.color.text.negative.default,
        borderColor: theme.color.border.ghost,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.hovered,
            color: theme.color.text.negative.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.pressed,
            color: theme.color.text.default,
          },
        },
      },
    },
  ],

  defaultVariants: {
    fullWidth: false,
    loading: false,
    size: "2",
    round: false,
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
