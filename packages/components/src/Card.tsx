import { panelStyles } from "./Panel";
import { styled } from "./stitches.config";

/**
 * Nayhoo card component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Card.stories.tsx
 */
export const Card = styled("div", panelStyles, {
  p: "$6 $9 $9 $9",

  variants: {
    variant: {
      outline: {
        outline: "1px solid $colors$divider",
      },
      ghost: {},
    },
    disableElevation: {
      true: {
        boxShadow: "none",
      },
    },
  },

  defaultVariants: {
    variant: "ghost",
    disableElevation: false,
  },
});
