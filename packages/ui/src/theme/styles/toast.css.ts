import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { keyframes, style } from "@vanilla-extract/css";

const slideDown = keyframes({
  "0%": { transform: "translate3d(0, var(--y), 0)" },
  "100%": { transform: "translate3d(0, 85px, 0)" },
});

const slideRight = keyframes({
  "0%": {
    transform: "translate3d(var(--radix-toast-swipe-end-x), var(--y), 0)",
  },
  "100%": { transform: "translate3d(100%, var(--y), 0)" },
});

const slideLeft = keyframes({
  "0%": {
    transform: "translate3d(var(--radix-toast-swipe-end-x), var(--y), 0)",
  },
  "100%": { transform: "translate3d(-100%, var(--y), 0)" },
});

export const toastViewport = style({
  position: "fixed",
  bottom: "0",
  right: "0",
  width: "390px",
  maxWidth: "100vw",
  margin: "0",
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
  transition: "transform 400ms ease",
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
  borderRadius: "5px",
  transitionProperty: "transform, opacity",
  transitionDuration: "400ms",
  transitionTimingFunction: "ease",
  vars: {
    "--opacity": "0",
    "--x": "var(--radix-toast-swipe-move-x, 0)",
    "--y": "calc(1px - (var(--stack-gap) * var(--index)))",
    "--scale": "calc(1 - (0.05 * var(--index)))",
  },

  selectors: {
    // "&::focus-visible": {
    //   boxShadow: "0 0 0 2px black",
    // },

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

    '&[data-state="closed"]': {
      animation: `${slideDown} 350ms ease`,
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

    '&[data-swipe-direction="right"]': {
      animation: `${slideRight} 150ms ease-out`,
    },

    '&[data-swipe-direction="left"]': {
      animation: `${slideLeft} 150ms ease-out`,
    },
  },
});

export const toastInner = style({
  padding: "15px",
  borderRadius: "5px",
  height: "var(--height)",
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  display: "grid",
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: "auto max-content",
  columnGap: "10px",
  rowGap: "5px",
  alignItems: "center",
  position: "relative",
  selectors: {
    '&:not([data-status="default"])': {
      gridTemplateAreas: '"icon title action" "icon description action"',
      gridTemplateColumns: "max-content auto max-content",
    },
    '&:not([data-front="true"])': {
      height: "var(--front-height)",
    },
    '&[data-hovering="true"]': {
      height: "var(--height)",
    },
  },
});

export const toastClose = style({
  position: "absolute",
  left: "0px",
  top: "0px",
  transform: "translate(-35%, -35%)",
  width: "15px !important",
  height: "15px !important",
  padding: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50% !important",
  backgroundColor: theme.colors.slate.slate1,
  color: theme.colors.slate.slate11,
  transition: "color 200ms ease 0s, opacity 200ms ease 0s",
  opacity: "0",
  selectors: {
    "&:hover": {
      color: theme.colors.slate.slate12,
    },
    [`${toastInner}:hover &`]: {
      opacity: 1,
    },
  },
});

const circleAnimation = keyframes({
  "0%": { transform: "scale(0) rotate(45deg)", opacity: "0" },
  "100%": { transform: "scale(1) rotate(45deg)", opacity: "1" },
});

const checkmarkAnimation = keyframes({
  "0%": { height: "0", width: "0", opacity: "0" },
  "40%": { height: "0", width: "6px", opacity: "1" },
  "100%": { opacity: "1", height: "10px" },
});

const firstLineAnimation = keyframes({
  "0%": { transform: "scale(0)", opacity: "0" },
  "100%": { transform: "scale(1)", opacity: "1" },
});

const secondLineAnimation = keyframes({
  "0%": { transform: "scale(0) rotate(90deg)", opacity: "0" },
  "100%": { transform: "scale(1) rotate(90deg)", opacity: "1" },
});

export const checkmark = style({
  width: "20px",
  height: "20px",
  borderRadius: "10px",
  backgroundColor: theme.semanticColors.success.success9,
  position: "relative",
  transform: "rotate(45deg)",
  animation: `${circleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`,
  animationDelay: "100ms",
  opacity: "0",

  selectors: {
    "&::after": {
      content: '""',
      boxSizing: "border-box",
      animation: `${checkmarkAnimation} 0.2s ease-out forwards`,
      opacity: "0",
      animationDelay: "200ms",
      position: "absolute",
      borderRight: "2px solid",
      borderBottom: "2px solid",
      borderColor: "#fff",
      bottom: "6px",
      left: "6px",
      height: "10px",
      width: "6px",
    },
  },
});

export const error = style({
  width: "20px",
  height: "20px",
  borderRadius: "10px",
  backgroundColor: theme.semanticColors.error.error9,
  position: "relative",
  transform: "rotate(45deg)",
  animation: `${circleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`,
  animationDelay: "100ms",
  opacity: "0",

  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      borderRadius: "3px",
      opacity: "0",
      backgroundColor: "#fff",
      bottom: "9px",
      left: "4px",
      height: "2px",
      width: "12px",
      animation: `${secondLineAnimation} 0.15s ease-out forwards`,
      animationDelay: "180ms",
      transform: "rotate(90deg)",
    },

    "&::after": {
      content: '""',
      animation: `${firstLineAnimation} 0.15s ease-out forwards`,
      animationDelay: "150ms",
      position: "absolute",
      borderRadius: "3px",
      opacity: "0",
      backgroundColor: "#fff",
      bottom: "9px",
      left: "4px",
      height: "2px",
      width: "12px",
    },
  },
});
