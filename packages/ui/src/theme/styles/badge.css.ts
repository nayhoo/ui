import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const badge = homemadeRecipe({
  base: {
    alignItems: "center",
    appearance: "none",
    borderRadius: theme.radii.full,
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: theme.fontFamily.text,
    justifyContent: "center",
    padding: "0",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },

  variants: {
    sentiment: {
      accented: {
        backgroundColor:
          theme.color.actionable.accented.solid.background.initial,
        color: theme.color.actionable.accented.solid.foreground.initial,
      },
      neutral: {
        backgroundColor:
          theme.color.actionable.neutral.solid.background.initial,
        color: theme.color.actionable.neutral.solid.foreground.initial,
      },
      caution: {
        backgroundColor:
          theme.color.actionable.caution.solid.background.initial,
        color: theme.color.actionable.caution.solid.foreground.initial,
      },
      negative: {
        backgroundColor:
          theme.color.actionable.negative.solid.background.initial,
        color: theme.color.actionable.negative.solid.foreground.initial,
      },
      positive: {
        backgroundColor:
          theme.color.actionable.positive.solid.background.initial,
        color: theme.color.actionable.positive.solid.foreground.initial,
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
    sentiment: "accented",
    size: "1",
  },
});

export type BadgeVariants = NonNullable<HomemadeRecipeVariants<typeof badge>>;
