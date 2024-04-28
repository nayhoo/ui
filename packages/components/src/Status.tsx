import { styled } from "./stitches.config";

/**
 * Nayhoo status component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Status.stories.tsx
 */
export const Status = styled("div", {
  backgroundColor: "$divider",
  borderRadius: "$round",
  flexShrink: 0,

  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
      error: {
        backgroundColor: "$error",
      },
    },
    size: {
      "1": {
        size: "$1",
      },
      "2": {
        size: "$2",
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});
