import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const textField = homemadeRecipe({
  base: {
    appearance: "none",
    borderWidth: theme.border.width.default,
    borderStyle: theme.border.style.default,
    borderRadius: theme.radii[2],
    color: theme.color.text.default,
    fontFamily: theme.fontFamily.text,
    fontVariantNumeric: "tabular-nums",
    width: "100%",

    selectors: {
      "&:-webkit-autofill": {},
      "&:-webkit-autofill::first-line": {
        // fontFamily: "$untitled",
      },
      "&:disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      "&:read-only": {},
      "&[data-invalid]": {
        borderColor: theme.color.border.negative,
      },
      "&[data-placeholder]": {
        color: theme.color.text.subtle,
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
        backgroundColor: theme.color.background.ghost.default,
        borderColor: theme.color.border.neutral,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.neutral.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.neutral.pressed,
          },
        },
      },
      ghost: {
        backgroundColor: theme.color.background.ghost.default,
        borderColor: theme.color.border.ghost,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.hovered,
          },
          "&:active:not(:disabled)": {
            backgroundColor: theme.color.background.ghost.pressed,
          },
        },
      },
    },
    error: {
      true: {
        borderColor: theme.color.border.negative,
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
