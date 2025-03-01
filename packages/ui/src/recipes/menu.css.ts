import { theme } from "@/theme-contracts/theme-contract.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

const baseMenuItemRecipe = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: theme.fontSizes[1],
    fontVariantNumeric: "tabular-nums",
    lineHeight: "1",
    cursor: "default",
    userSelect: "none",
    whiteSpace: "nowrap",
    height: theme.sizes[5],
    paddingLeft: theme.space[5],
    paddingRight: theme.space[5],
    borderRadius: theme.radii[1],
  },

  variants: {},
  defaultVariants: {},
});

export const menuItemRecipe = recipe({
  base: [
    baseMenuItemRecipe({}),
    {
      position: "relative",
      backgroundColor: "transparent",

      selectors: {
        "&:hover": {
          backgroundColor: theme.semanticColors.transparentHover,
        },

        "&[data-highlighted]": {
          outline: "none",
          backgroundColor: theme.semanticColors.transparentActive,
        },

        "&[data-disabled]": {
          color: theme.colors.slate.slate8,
          backgroundColor: theme.colors.slate.slate2,
          cursor: "not-allowed",
          pointerEvents: "none",
        },
      },
    },
  ],

  variants: {},
  defaultVariants: {},
});

export type MenuItemVariants = NonNullable<
  RecipeVariants<typeof menuItemRecipe>
>;

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

export type MenuLabelVariants = NonNullable<
  RecipeVariants<typeof menuLabelRecipe>
>;

export const menuRecipe = recipe({
  base: {
    boxSizing: "border-box",
    minWidth: 120,
    padding: theme.space[1],
  },

  variants: {},
  defaultVariants: {},
});

export type MenuVariants = NonNullable<RecipeVariants<typeof menuRecipe>>;

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

export type MenuSeparatorVariants = NonNullable<
  RecipeVariants<typeof menuSeparatorRecipe>
>;
