import { panel } from "@/theme/styles/panel.css";
import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const dialogContentRecipe = recipe({
  base: [
    panel,
    {
      border: `1px solid ${theme.semanticColors.line}`,
      boxShadow: "none",

      left: "50%",
      marginTop: "-5vh",
      maxHeight: "85vh",
      minWidth: 200,
      overflow: "auto",
      position: "fixed",
      top: "50%",
      transform: "translate(-50%, -50%)",
      willChange: "transform",

      selectors: {
        "&:focus": {
          outline: "none",
        },
      },
    },
  ],

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    size: {
      "1": {
        maxWidth: "430px",
      },
      "2": {
        maxWidth: "715px",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: "4",
  },
});

export type DialogContentVariants = RecipeVariants<typeof dialogContentRecipe>;

// could be its own component, glass?
export const dialogOverlayRecipe = recipe({
  base: {
    backgroundColor: `color-mix(in srgb, ${theme.semanticColors.background}, transparent 40%)`,
    bottom: 0,
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,

    backdropFilter: "blur(10px)",
    transition: "backdrop-filter 100ms linear",
    willChange: "backdrop-filter",
  },

  variants: {
    disableOverlayBlur: {
      true: {
        backdropFilter: "blur(0px)",
      },
    },
  },

  defaultVariants: {},
});

// Get the type
export type DialogOverlayVariants = RecipeVariants<typeof dialogOverlayRecipe>;
