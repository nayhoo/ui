import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const badge = homemadeRecipe({
  base: {
    alignItems: "center",
    appearance: "none",
    borderRadius: theme.radii.full,
    color: theme.color.text.onSolid,
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
      brand: {
        backgroundColor: theme.color.background.brand.default,
      },
      neutral: {
        backgroundColor: theme.color.background.neutral.default,
      },
      caution: {
        backgroundColor: theme.color.background.caution.default,
      },
      negative: {
        backgroundColor: theme.color.background.negative.default,
      },
      positive: {
        backgroundColor: theme.color.background.positive.default,
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
    sentiment: "brand",
    size: "1",
  },
});

export type BadgeVariants = NonNullable<HomemadeRecipeVariants<typeof badge>>;
