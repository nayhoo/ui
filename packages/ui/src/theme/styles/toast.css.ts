import { theme } from "@/theme/themes/theme-contract.css";
import { keyframes, style } from "@vanilla-extract/css";

const fadeOut = keyframes({
  "0%": {
    opacity: "var(--opacity)",
  },
  "100%": {
    opacity: "0",
  },
});

const slideIn = keyframes({
  "0%": {
    transform: "translate3d(100%, var(--y), 0)",
  },
  "100%": {
    transform: "translate3d(var(--radix-toast-swipe-end-x), var(--y), 0)",
  },
});

export const toastViewport = style({
  position: "fixed",
  bottom: "0",
  right: "0",
  width: "390px",
  maxWidth: "100vw",
  listStyle: "none",
  zIndex: theme.zIndex[6],
  outline: "none",
  vars: {
    "--stack-gap": "10px",
  },
});

export const toastRoot = style({
  position: "absolute",
  bottom: "15px",
  right: "15px",
  left: "15px",
  opacity: "var(--opacity)",
  transform: "translate3d(var(--x), 85px, 0)",
  outline: "none",
  transitionProperty: "transform, opacity",
  transitionDuration: "400ms",
  transitionTimingFunction: "ease",
  vars: {
    "--opacity": "0",
    "--x": "var(--radix-toast-swipe-move-x, 0)",
    "--y": "calc(0px - (var(--stack-gap) * var(--index)))",
    "--scale": "calc(1 - (0.05 * var(--index)))",
  },

  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      left: "0",
      right: "0",
      top: "100%",
      width: "100%",
      height: "1000px",
      background: "transparent",
    },

    '&[data-front="true"]': {
      transform: "translate3d(var(--x), var(--y, 0), 0)",
    },

    '&[data-front="false"]': {
      transform: "translate3d(var(--x), var(--y, 0), 0) scale(var(--scale))",
    },

    '&[data-state="open"]': {
      animation: `${slideIn} 350ms ease`,
    },

    '&[data-state="closed"]': {
      animation: `${fadeOut} 100ms ease`,
    },

    '&[data-hidden="false"]': {
      vars: {
        "--opacity": "1",
      },
    },

    '&[data-hidden="true"]': {
      vars: {
        "--opacity": "0",
      },
    },

    '&[data-hovering="true"]': {
      vars: {
        "--scale": "1",
        "--y": "calc(var(--hover-offset-y) - var(--stack-gap) * var(--index))",
      },
      transitionDuration: "350ms",
    },

    '&[data-swipe="move"]': {
      transitionDuration: "0ms",
    },

    '&[data-swipe="cancel"]': {
      vars: {
        "--x": "0",
      },
    },
  },
});

export const toastCard = style({
  padding: theme.space[3],
  borderRadius: theme.radii[2],
  borderWidth: theme.border.width.default,
  borderStyle: theme.border.style.default,
  borderColor: theme.color.border.default,
  height: "var(--height)",
  backgroundColor: theme.color.background.surface.overlay,
  position: "relative",
  selectors: {
    '&:not([data-front="true"])': {
      height: "var(--front-height)",
    },
    '&[data-hovering="true"]': {
      height: "var(--height)",
    },
  },
});
