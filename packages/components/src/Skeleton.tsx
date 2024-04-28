import { pulse } from "./keyframes";
import { styled } from "./stitches.config";

/**
 * Nayhoo skeleton component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Skeleton.stories.tsx
 */
export const Skeleton = styled("div", {
  backgroundColor: "$transparentHover",
  overflow: "hidden",
  position: "relative",

  "&::after": {
    animationDirection: "alternate",
    animationDuration: "500ms",
    animationIterationCount: "infinite",
    animationName: `${pulse}`,
    animationTimingFunction: "ease-in-out",
    backgroundColor: "$transparentPressed",
    borderRadius: "inherit",
    bottom: 0,
    content: '""',
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },

  variants: {
    variant: {
      avatar1: {
        borderRadius: "$round",
        size: "$4",
      },
      avatar2: {
        borderRadius: "$round",
        size: "$6",
      },
      avatar3: {
        borderRadius: "$round",
        size: "$8",
      },
      avatar4: {
        borderRadius: "$round",
        size: "3rem",
      },
      avatar5: {
        borderRadius: "$round",
        size: "4rem",
      },
      avatar6: {
        borderRadius: "$round",
        size: "5rem",
      },
      text: {
        height: "$1",
      },
      heading: {
        height: "$3",
      },
      button1: {
        borderRadius: "$lg",
        height: "$6",
        width: 64,
      },
      button2: {
        borderRadius: "$xl",
        height: "$8",
        width: 88,
      },
      button3: {
        borderRadius: "$xl",
        height: "$10",
        width: 112,
      },
    },
  },
  defaultVariants: {
    variant: "text",
  },
});
