import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const textFieldRecipe = recipe({
  base: {
    appearance: "none",
    borderWidth: "0",
    boxSizing: "border-box",
    fontFamily: "inherit",
    margin: "0",
    outline: "none",
    padding: "0",
    width: "100%",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

    backgroundColor: "transparent",
    color: "inherit",
    fontVariantNumeric: "tabular-nums",

    selectors: {
      "&:hover": {
        backgroundColor: theme.semanticColors.transparentHover,
      },
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
        backgroundColor: theme.colors.slate.slate2,
        boxShadow: `inset 0 0 0 1px ${theme.colors.slateA.slateA7}`,
        // boxShadow: "none",
        color: theme.colors.slate.slate8,
        cursor: "not-allowed",
        pointerEvents: "none",
        // "&::placeholder": {
        //   color: "$slate7",
        // },
      },
      "&:focus": {
        outline: "1px solid #000000",
        // "&:-webkit-autofill": {},
      },
      "&:read-only": {
        backgroundColor: theme.colors.slate.slate2,
        // "&:focus": {
        //   boxShadow: `inset 0px 0px 0px 1px ${vars.colors.slate.slate7}`,
        // },
      },
      "&[data-invalid]": {
        boxShadow: `inset 0px 0px 0px 1px ${theme.semanticColors.error}`,
      },
      "&[data-placeholder]": {
        color: theme.semanticColors.textPlaceholder,
      },
    },
  },

  variants: {
    size: {
      "1": {
        borderRadius: theme.radii[1],
        height: theme.sizes[5],
        fontSize: theme.fontSizes[1],
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        lineHeight: theme.sizes[5],
        selectors: {
          "&:-webkit-autofill::first-line": {
            fontSize: theme.fontSizes[1],
          },
        },
      },
      "2": {
        borderRadius: theme.radii[2],
        fontSize: theme.fontSizes[3],
        lineHeight: theme.lineHeights[6],
        height: theme.sizes[6],
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],
        selectors: {
          "&:-webkit-autofill::first-line": {
            fontSize: theme.fontSizes[3],
          },
        },
      },
      "3": {
        borderRadius: theme.radii[2],
        fontSize: theme.fontSizes[4],
        lineHeight: theme.sizes[7],
        height: theme.sizes[7],
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
        selectors: {
          "&:-webkit-autofill::first-line": {
            fontSize: theme.fontSizes[4],
          },
        },
      },
    },
    error: {
      true: {
        boxShadow: `inset 0px 0px 0px 1px ${theme.semanticColors.error}`,
        // "&:focus": {
        //   // boxShadow: "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
        // },
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
      outline: {
        boxShadow: `inset 0px 0px 0px 1px ${theme.semanticColors.line}`,
      },
      ghost: {
        boxShadow: "none",
      },
    },
  },
  defaultVariants: {
    size: "2",
    variant: "outline",
  },
});

export type TextFieldVariants = NonNullable<
  RecipeVariants<typeof textFieldRecipe>
>;
