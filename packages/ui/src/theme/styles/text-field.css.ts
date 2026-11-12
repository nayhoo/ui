import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import * as colors from "@radix-ui/colors";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const textFieldRecipe = homemadeRecipe({
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
        // backgroundColor: theme.color.transparentHover,
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
        backgroundColor: colors.slate.slate2,
        boxShadow: `inset 0 0 0 1px ${colors.slateA.slateA7}`,
        // boxShadow: "none",
        color: colors.slate.slate8,
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
        backgroundColor: colors.slate.slate2,
        // "&:focus": {
        //   boxShadow: `inset 0px 0px 0px 1px ${vars.colors.slate.slate7}`,
        // },
      },
      "&[data-invalid]": {
        // boxShadow: `inset 0px 0px 0px 1px ${theme.color.error.error9}`,
      },
      "&[data-placeholder]": {
        // color: theme.color.textPlaceholder,
      },
    },
  },

  variants: {
    size: {
      "1": {
        borderRadius: theme.radii[1],
        height: theme.space[5],
        fontSize: theme.fontSize[1],
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        lineHeight: theme.space[5],
        selectors: {
          "&:-webkit-autofill::first-line": {
            fontSize: theme.fontSize[1],
          },
        },
      },
      "2": {
        borderRadius: theme.radii[2],
        fontSize: theme.fontSize[3],
        lineHeight: theme.lineHeight[6],
        height: theme.space[6],
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],
        selectors: {
          "&:-webkit-autofill::first-line": {
            fontSize: theme.fontSize[3],
          },
        },
      },
      "3": {
        borderRadius: theme.radii[2],
        fontSize: theme.fontSize[4],
        lineHeight: theme.space[7],
        height: theme.space[7],
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
        selectors: {
          "&:-webkit-autofill::first-line": {
            fontSize: theme.fontSize[4],
          },
        },
      },
    },
    error: {
      true: {
        // boxShadow: `inset 0px 0px 0px 1px ${theme.color.error.error9} !important`, // TODO: is this possible without !important?
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
        // boxShadow: `inset 0px 0px 0px 1px ${theme.color.line}`,
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
  HomemadeRecipeVariants<typeof textFieldRecipe>
>;
