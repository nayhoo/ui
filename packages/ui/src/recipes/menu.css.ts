import { theme } from "@/theme-contracts/theme-contract.css";
import { recipe } from "@vanilla-extract/recipes";

const baseMenuItemRecipe = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // fontFamily: "$untitled",
    fontSize: theme.fontSizes[1],
    fontVariantNumeric: "tabular-nums",
    lineHeight: "1",
    cursor: "default",
    userSelect: "none",
    whiteSpace: "nowrap",
    height: theme.sizes[5],
    paddingLeft: theme.space[5],
    paddingRight: theme.space[5],
  },

  variants: {},
  defaultVariants: {},
});

export const menuItemRecipe = recipe({
  base: [
    baseMenuItemRecipe({}),
    {
      position: "relative",
      color: theme.semanticColors.primary.primary9,

      selectors: {
        "&[data-highlighted]": {
          outline: "none",
          // backgroundColor: "$blue9",
          color: "white",
        },

        "&[data-disabled]": {
          color: theme.colors.slate.slate9,
        },
      },
    },
  ],

  variants: {},
  defaultVariants: {},
});

export const menuLabelRecipe = recipe({
  base: [
    baseMenuItemRecipe({}),
    {
      position: "relative",
      color: theme.semanticColors.textSubtle,
    },
  ],

  variants: {},
  defaultVariants: {},
});

export const menuRecipe = recipe({
  base: {
    boxSizing: "border-box",
    minWidth: 120,
    paddingTop: theme.space[1],
    paddingBottom: theme.space[1],
  },

  variants: {},
  defaultVariants: {},
});

export const menuSeparatorRecipe = recipe({
  base: {
    height: 1,
    marginTop: theme.space[1],
    marginBottom: theme.space[1],
    backgroundColor: theme.semanticColors.line,
  },

  variants: {},
  defaultVariants: {},
});
