import { pulse } from "./keyframes";
import { styled } from "./stitches.config";

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
        size: "$3",
      },
      avatar2: {
        borderRadius: "$round",
        size: "$5",
      },
      avatar3: {
        borderRadius: "$round",
        size: "$6",
      },
      avatar4: {
        borderRadius: "$round",
        size: "$7",
      },
      avatar5: {
        borderRadius: "$round",
        size: "$8",
      },
      avatar6: {
        borderRadius: "$round",
        size: "$9",
      },
      text: {
        height: "$1",
      },
      title: {
        height: "$5",
      },
      heading: {
        height: "$3",
      },
      button1: {
        borderRadius: "$1",
        height: "$5",
        width: "$8",
      },
      button2: {
        borderRadius: "$2",
        height: "$6",
        width: "$9",
      },
      button3: {
        borderRadius: "$2",
        height: "$7",
        width: 94,
      },
    },
  },
  defaultVariants: {
    variant: "text",
  },
});
