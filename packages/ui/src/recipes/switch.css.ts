import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

// SwitchThumb

export const switchThumbRecipe = recipe({
  base: {
    position: "absolute",
    left: 0,
    width: 13,
    height: 13,
    backgroundColor: "white",
    borderRadius: theme.radii.round,
    boxShadow:
      "rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;",
    transition: "transform 100ms cubic-bezier(0.22, 1, 0.36, 1)",
    transform: "translateX(1px)",
    willChange: "transform",

    selectors: {
      '&[data-state="checked"]': {
        transform: "translateX(11px)",
      },
    },
  },

  variants: {},
  defaultVariants: {},
});

// Switch

export const switchRecipe = recipe({
  base: {
    all: "unset",
    boxSizing: "border-box",
    userSelect: "none",

    // Reset
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
    lineHeight: "1",
    margin: "0",
    outline: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

    backgroundColor: theme.colors.slate.slate5,
    borderRadius: theme.radii.full,
    position: "relative",

    selectors: {
      "&::before": {
        boxSizing: "border-box",
      },
      "&::after": {
        boxSizing: "border-box",
      },

      "&:focus": {
        boxShadow: `0 0 0 2px ${theme.colors.slate.slate8}`,
      },

      '&[data-state="checked"]': {
        // backgroundColor: "$blue9",
        // "&:focus": {
        //   boxShadow: "0 0 0 2px $colors$blue8",
        // },
      },
    },
  },

  variants: {
    size: {
      "1": {
        width: theme.sizes[5],
        height: theme.sizes[3],
      },
      "2": {
        width: theme.sizes[7],
        height: theme.sizes[5],
        // [`& ${StyledThumb}`]: {
        //   width: 21,
        //   height: 21,
        //   transform: "translateX(2px)",
        //   '&[data-state="checked"]': {
        //     transform: "translateX(22px)",
        //   },
        // },
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

export type SwitchVariants = NonNullable<RecipeVariants<typeof switchRecipe>>;
