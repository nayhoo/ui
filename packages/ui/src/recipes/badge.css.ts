import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const badgeRecipe = recipe({
  base: {
    alignItems: "center",
    appearance: "none",
    borderWidth: "0",
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: "inherit",
    justifyContent: "center",
    lineHeight: "1",
    verticalAlign: "middle",
    outline: "none",
    padding: "0",
    textDecoration: "none",
    userSelect: "none",

    borderRadius: theme.radii.full,
    whiteSpace: "nowrap",
  },

  variants: {
    color: {
      primary: {
        backgroundColor: theme.semanticColors.primaryA.primaryA3,
        color: theme.semanticColors.primary.primary9,
      },
      secondary: {
        backgroundColor: theme.semanticColors.secondaryA.secondaryA3,
        color: theme.semanticColors.secondary.secondary9,
      },
      error: {
        backgroundColor: theme.semanticColors.errorA.errorA3,
        color: theme.semanticColors.error.error9,
      },
    },
    size: {
      "1": {
        height: theme.sizes[4],
        paddingLeft: theme.space[1],
        paddingRight: theme.space[1],
        fontSize: theme.fontSizes[1],
      },
      "2": {
        height: theme.sizes[5],
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        fontSize: theme.fontSizes[2],
      },
    },
  },

  defaultVariants: {
    color: "primary",
    size: "1",
  },
});

export type BadgeVariants = NonNullable<RecipeVariants<typeof badgeRecipe>>;
