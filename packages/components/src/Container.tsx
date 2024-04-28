import { styled } from "./stitches.config";

/**
 * Nayhoo container component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Container.stories.tsx
 */
export const Container = styled("div", {
  boxSizing: "border-box",
  flexShrink: 0,
  mx: "$auto",
  px: "0 $3",

  variants: {
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
