import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const formFieldRecipe = recipe({
  base: {
    display: "grid",
    marginBottom: theme.space[2],
  },

  variants: {},
  defaultVariants: {},
});

export type FormFieldVariants = NonNullable<RecipeVariants<typeof formFieldRecipe>>;

export const formLabelRecipe = recipe({
  base: {
    color: theme.semanticColors.textSubtle,
    fontSize: theme.fontSizes[3],
    fontWeight: theme.fontWeights.medium,
    lineHeight: theme.lineHeights[6],
  },

  variants: {},
  defaultVariants: {},
});

export type FormLabelVariants = NonNullable<RecipeVariants<typeof formLabelRecipe>>;

export const formMessageRecipe = recipe({
  base: {
    fontSize: theme.fontSizes[2],
    opacity: 0.8,
  },

  variants: {
    error: {
      true: {
        color: theme.semanticColors.error.error9,
      },
    },
  },
  defaultVariants: {},
});

export type FormMessageVariants = NonNullable<RecipeVariants<typeof formMessageRecipe>>;
