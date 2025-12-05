import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { keyframes, style } from "@vanilla-extract/css";

export const accordion = style({
  borderRadius: theme.radii[2],
  width: 300,
});

export const accordionItem = style({
  marginTop: 1,
  overflow: "hidden",

  selectors: {
    "&:first-child": {
      borderTopLeftRadius: theme.radii[1],
      borderTopRightRadius: theme.radii[1],
      marginTop: 0,
    },

    "&:last-child": {
      borderBottomLeftRadius: theme.radii[1],
      borderBottomRightRadius: theme.radii[1],
    },

    "&:focus-within": {
      position: "relative",
      zIndex: 1,
    },
  },
});

export const chevron = style({
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",

  selectors: {
    "[data-state=open] &": {
      transform: "rotate(180deg)",
    },
  },
});

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: "var(--radix-accordion-content-height)",
  },
});

const slideUp = keyframes({
  from: {
    height: "var(--radix-accordion-content-height)",
  },
  to: {
    height: 0,
  },
});

export const accordionContent = style({
  fontSize: theme.fontSizes[3],
  overflow: "hidden",

  selectors: {
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },
});

export const accordionContentText = style({
  padding: "15px 20px",
});

export const accordionHeader = style({
  all: "unset",

  display: "flex",
});

export const accordionTrigger = style({
  all: "unset",

  alignItems: "center",
  backgroundColor: "transparent",
  boxShadow: `0 1px 0 ${theme.semanticColors.line}`,
  display: "flex",
  flex: 1,
  fontFamily: "inherit",
  fontSize: theme.fontSizes[3],
  height: 45,
  justifyContent: "space-between",
  lineHeight: 1,
  padding: "0 20px",

  selectors: {
    "&:hover": {
      backgroundColor: theme.semanticColors.transparentHover,
    },
  },
});
