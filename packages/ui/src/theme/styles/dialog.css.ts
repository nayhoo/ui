import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { panel } from "@/theme/styles/panel.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";
import { heading } from "./heading.css";
import { text } from "./text.css";

export const dialogContentRecipe = homemadeRecipe({
  base: [
    panel,
    {
      left: "50%",
      marginTop: "-5vh",
      maxHeight: "85vh",
      minWidth: 200,
      overflow: "auto",
      position: "fixed",
      top: "50%",
      transform: "translate(-50%, -50%)",
      willChange: "transform",
      zIndex: theme.zIndex[5],
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

export type DialogContentVariants = HomemadeRecipeVariants<
  typeof dialogContentRecipe
>;

export const dialogDescription = style([
  text({ color: "subtle", size: "3" }),
  {
    marginBottom: theme.space[4],
  },
]);

export const dialogFooter = style({
  backgroundColor: theme.color.container.secondary.background,
  borderTop: `1px solid ${theme.color.container.secondary.borderColor}`,
  bottom: 0,
  padding: `${theme.space[2]} ${theme.space[2]}`,
  position: "sticky",
  zIndex: theme.zIndex[5],
});

export const dialogHeader = style({
  backgroundColor: theme.color.container.secondary.background,
  borderBottom: `1px solid ${theme.color.container.secondary.borderColor}`,
  top: 0,
  padding: `${theme.space[2]} ${theme.space[2]}`,
  position: "sticky",
  zIndex: theme.zIndex[5],
});

export const dialogTitle = style([
  heading({ as: "h5" }),
  {
    marginLeft: theme.space[2],
  },
]);

export const dialogOverlay = style({
  backgroundColor: `color-mix(in srgb, #000, transparent 50%)`,
  bottom: 0,
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,
  transition: "backdrop-filter 100ms linear",
  willChange: "backdrop-filter",
  zIndex: theme.zIndex[5],
});
