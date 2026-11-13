import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const textField = homemadeRecipe({
  base: {
    appearance: "none",
    border: "1px solid",
    borderRadius: theme.radii[2],
    boxSizing: "border-box",
    color: theme.color.content.primary.foreground,
    fontFamily: theme.fontFamily.text,
    fontVariantNumeric: "tabular-nums",
    width: "100%",

    selectors: {
      "&:-webkit-autofill": {},
      "&:-webkit-autofill::first-line": {
        // fontFamily: "$untitled",
      },
      "&::after": {
        boxSizing: "border-box",
      },
      "&::before": {
        boxSizing: "border-box",
      },
      "&:disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "&:read-only": {},
      "&[data-invalid]": {
        borderColor:
          theme.color.actionable.negative.bordered.borderColor.initial,
      },
      "&[data-placeholder]": {
        color: theme.color.content.subtle.foreground,
      },
    },
  },

  variants: {
    size: {
      "1": {
        fontSize: theme.fontSize[1],
        letterSpacing: theme.letterSpacing[1],
        lineHeight: theme.lineHeight[1],
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        height: theme.space[5],
        selectors: {
          "&:-webkit-autofill::first-line": {
            fontSize: theme.fontSize[1],
          },
        },
      },
      "2": {
        fontSize: theme.fontSize[2],
        letterSpacing: theme.letterSpacing[2],
        lineHeight: theme.lineHeight[2],
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],
        height: theme.space[6],
        selectors: {
          "&:-webkit-autofill::first-line": {
            fontSize: theme.fontSize[2],
          },
        },
      },
      "3": {
        fontSize: theme.fontSize[3],
        letterSpacing: theme.letterSpacing[3],
        lineHeight: theme.lineHeight[3],
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
        height: theme.space[7],
        selectors: {
          "&:-webkit-autofill::first-line": {
            fontSize: theme.fontSize[3],
          },
        },
      },
    },
    error: {
      true: {
        borderColor:
          theme.color.actionable.negative.bordered.borderColor.initial,
      },
    },
    cursor: {
      default: {
        cursor: "default",
        selectors: {
          "&:focus": {
            cursor: "text",
          },
        },
      },
      text: {
        cursor: "text",
      },
    },
    variant: {
      bordered: {
        backgroundColor:
          theme.color.actionable.neutral.bordered.background.initial,
        borderColor:
          theme.color.actionable.neutral.bordered.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.color.actionable.neutral.bordered.background.hover,
            borderColor:
              theme.color.actionable.neutral.bordered.borderColor.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.color.actionable.neutral.bordered.background.active,
            borderColor:
              theme.color.actionable.neutral.bordered.borderColor.active,
          },
        },
      },
      ghost: {
        backgroundColor:
          theme.color.actionable.neutral.ghost.background.initial,
        borderColor: theme.color.actionable.neutral.ghost.borderColor.initial,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor:
              theme.color.actionable.neutral.ghost.background.hover,
            borderColor: theme.color.actionable.neutral.ghost.borderColor.hover,
          },
          "&:active:not(:disabled)": {
            backgroundColor:
              theme.color.actionable.neutral.ghost.background.active,
            borderColor:
              theme.color.actionable.neutral.ghost.borderColor.active,
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "2",
    variant: "bordered",
  },
});

export type TextFieldVariants = NonNullable<
  HomemadeRecipeVariants<typeof textField>
>;
