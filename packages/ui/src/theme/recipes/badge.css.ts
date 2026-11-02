import { homemadeRecipe } from "@/theme/recipes/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const badgeRecipe = homemadeRecipe({
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
        backgroundColor: theme.color.primaryA.primaryA3,
        color: theme.color.primary.primary9,
      },
      secondary: {
        backgroundColor: theme.color.secondaryA.secondaryA3,
        color: theme.color.secondary.secondary9,
      },
      error: {
        backgroundColor: theme.color.errorA.errorA3,
        color: theme.color.error.error9,
      },
    },
    size: {
      "1": {
        height: theme.space[4],
        paddingLeft: theme.space[1],
        paddingRight: theme.space[1],
        fontSize: theme.fontSize[1],
      },
      "2": {
        height: theme.space[5],
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        fontSize: theme.fontSize[2],
      },
    },
  },

  defaultVariants: {
    color: "primary",
    size: "1",
  },
});

export type BadgeVariants = NonNullable<
  HomemadeRecipeVariants<typeof badgeRecipe>
>;
