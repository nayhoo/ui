import { theme } from "@/theme/themes/theme-contract.css";
import { keyframes, style } from "@vanilla-extract/css";

export const accordion = style({
  borderRadius: theme.radii[2],
});

export const accordionItem = style({
  overflow: "hidden",

  selectors: {
    "&:first-child": {
      borderTopLeftRadius: theme.radii[2],
      borderTopRightRadius: theme.radii[2],
    },

    "&:last-child": {
      borderBottomLeftRadius: theme.radii[2],
      borderBottomRightRadius: theme.radii[2],
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
  color: theme.color.content.subtle.foreground,
  fontFamily: theme.fontFamily.text,
  fontSize: theme.fontSize[2],
  fontVariantNumeric: "tabular-nums",
  letterSpacing: theme.letterSpacing[2],
  lineHeight: theme.lineHeight[2],
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
  padding: theme.space[4],
});

export const accordionHeader = style({
  all: "unset",

  display: "flex",
});

export const accordionTrigger = style({
  all: "unset",

  alignItems: "center",
  backgroundColor: theme.color.actionable.neutral.ghost.background.initial,
  border: "1px solid",
  borderColor: theme.color.actionable.neutral.ghost.borderColor.initial,
  color: theme.color.content.primary.foreground,
  display: "flex",
  flex: 1,
  fontFamily: theme.fontFamily.text,
  fontSize: theme.fontSize[4],
  fontVariantNumeric: "tabular-nums",
  fontWeight: theme.fontWeight.medium,
  gap: theme.space[2],
  justifyContent: "space-between",
  letterSpacing: theme.letterSpacing[4],
  lineHeight: theme.lineHeight[4],
  padding: theme.space[2],

  selectors: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.color.actionable.neutral.ghost.background.hover,
      borderColor: theme.color.actionable.neutral.ghost.borderColor.hover,
    },
  },
});
