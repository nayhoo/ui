import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const switchRecipe = recipe({
  base: {
    all: "unset",

    backgroundColor: theme.colors.slate.slate5,
    borderRadius: theme.radii.full,
    position: "relative",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",

    selectors: {
      "&:focus": {
        boxShadow: `0 0 0 2px ${theme.colors.slate.slate8}`,
      },
      '&[data-state="checked"]': {
        backgroundColor: theme.semanticColors.primary.primary9,
      },
    },
  },

  variants: {
    size: {
      "1": {
        width: theme.sizes[5],
        height: theme.sizes[4],
      },
      "2": {
        width: theme.sizes[7],
        height: theme.sizes[5],
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

export type SwitchVariants = NonNullable<RecipeVariants<typeof switchRecipe>>;

export const switchThumbRecipe = recipe({
  base: {
    all: "unset",

    display: "block",
    backgroundColor: "white",
    borderRadius: theme.radii.full,
    transition: "transform 100ms",
    transform: "translateX(2px)",
    willChange: "transform",

    position: "absolute",
    left: 0,
    top: "2px",
  },

  variants: {
    size: {
      "1": {
        width: theme.sizes[3],
        height: theme.sizes[3],
        selectors: {
          '&[data-state="checked"]': {
            transform: "translateX(10px)",
          },
        },
      },
      "2": {
        width: "20px",
        height: "20px",
        selectors: {
          '&[data-state="checked"]': {
            transform: "translateX(18px)",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

export type SwitchThumbVariants = NonNullable<
  RecipeVariants<typeof switchThumbRecipe>
>;
