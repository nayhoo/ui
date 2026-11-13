import { pulse } from "@/theme/animations/pulse.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const skeleton = style({
  backgroundColor: theme.color.actionable.negative.ghost.background.hover,
  borderColor: "transparent",
  boxShadow: "none",
  color: "transparent",
  overflow: "hidden",
  pointerEvents: "none",
  position: "relative",
  userSelect: "none",
  width: "fit-content",

  selectors: {
    "&::after": {
      animationName: `${pulse}`,
      animationDuration: "500ms",
      animationDirection: "alternate",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease-in-out",
      backgroundColor: theme.color.actionable.negative.ghost.background.active,
      bottom: 0,
      content: '""',
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: 1,
    },
  },
});

globalStyle(`${skeleton} > *`, {
  visibility: "hidden",
});

export const skeletonStandalone = style({
  display: "block",
  borderRadius: theme.radii[2],
});
