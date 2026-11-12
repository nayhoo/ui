import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";
import { homemadeRecipe } from "../../lib/homemade-recipe.css";
import { button } from "./button.css";
import { separator } from "./separator.css";
import { text } from "./text.css";

export const menuTrigger = style([
  button({
    size: "2",
    sentiment: "neutral",
    variant: "bordered",
  }),
  {
    selectors: {
      "&:not([data-placeholder])": {
        color: theme.color.content.primary.foreground,
      },
    },
  },
]);

export const menuItem = style([
  button({ size: "2", sentiment: "accented", variant: "ghost" }),
  {
    display: "flex",
    justifyContent: "flex-start",

    selectors: {
      "&[data-highlighted]": {
        outline: "none",
        backgroundColor: theme.color.selectable.background.selected,
        borderColor: theme.color.selectable.borderColor.selected,
        color: theme.color.selectable.foreground.selected,
      },
    },
  },
]);

export const menuLabel = style([
  text({ size: "2", color: "subtle" }),
  {
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
    marginBottom: theme.space[2],
    marginTop: theme.space[2],
  },
]);

export const menuContent = homemadeRecipe({
  base: {
    boxSizing: "border-box",
    minWidth: 120,
    padding: theme.space[1],
  },

  variants: {
    /** Whether or not z-index is set to max */
    onTop: {
      true: {
        zIndex: theme.zIndex.max,
      },
      false: {
        zIndex: theme.zIndex[2],
      },
    },
  },

  defaultVariants: {
    onTop: false,
  },
});

export type MenuContentVariants = HomemadeRecipeVariants<typeof menuContent>;

export const menuSeparator = style([
  separator({ variant: "secondary" }),
  {
    marginTop: theme.space[1],
    marginBottom: theme.space[1],
  },
]);
