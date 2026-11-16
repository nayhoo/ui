import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { HomemadeRecipeVariants } from "homemade-recipes";

// 'switch' is not allowed as a variable declaration name.ts(1389)
export const _switch = homemadeRecipe({
  base: {
    backgroundColor: theme.color.background.neutral.default,
    border: "none",
    borderRadius: theme.radii.full,
    position: "relative",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",

    selectors: {
      '&[data-state="checked"]': {
        backgroundColor: theme.color.background.brand.default,
      },
    },
  },

  variants: {
    size: {
      "1": {
        height: theme.space[4],
        width: "24px",
      },
      "2": {
        height: theme.space[5],
        width: "40px",
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

export type SwitchVariants = NonNullable<
  HomemadeRecipeVariants<typeof _switch>
>;

export const switchThumb = homemadeRecipe({
  base: {
    backgroundColor: "white",
    borderRadius: theme.radii.full,
    display: "block",
    left: 0,
    position: "absolute",
    top: "2px",
    transform: "translateX(2px)",
    transition: "transform 100ms",
    willChange: "transform",
  },

  variants: {
    size: {
      "1": {
        width: theme.space[3],
        height: theme.space[3],
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
  HomemadeRecipeVariants<typeof switchThumb>
>;
