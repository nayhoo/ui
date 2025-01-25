import * as colors from "@radix-ui/colors";
import { createGlobalTheme } from "@vanilla-extract/css";

export const baseTheme = createGlobalTheme(":root", {
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    7: "40px",
    8: "48px",
    9: "64px",
  },
  fontSizes: {
    1: "12px",
    2: "14px",
    /** Base */
    3: "16px",
    4: "18px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "35px",
    9: "60px",
  },
  colors,
  fonts: {
    text: "-apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto, 'Helvetica Neue', 'Open Sans (Custom)', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    code: "'Menlo', 'Consolas (Custom)', 'Bitstream Vera Sans Mono', monospace, 'Apple Color Emoji', 'Segoe UI Emoji'",
    emphasis: "'Times New Roman', 'Times', serif",
    quote: "'Times New Roman', 'Times', serif",
  },
  fontWeights: {
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700",
  },
  lineHeights: {
    1: "16px",
    2: "20px",
    3: "24px",
    4: "26px",
    5: "28px",
    6: "30px",
    7: "36px",
    8: "40px",
    9: "60px",
  },
  letterSpacing: {
    1: "0.0025em",
    2: "0em",
    3: "0em",
    4: "-0.0025em",
    5: "-0.005em",
    6: "-0.00625em",
    7: "-0.0075em",
    8: "-0.01em",
    9: "-0.025em",
  },
  sizes: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    7: "40px",
    8: "48px",
    9: "64px",
  },
  radii: {
    1: "3px",
    2: "4px",
    3: "6px",
    4: "8px",
    5: "12px",
    6: "16px",
    round: "50%",
    full: "9999px",
  },
  shadows: {
    1: "inset 0 0 0 1px var(--gray-a5),inset 0 1.5px 2px 0 var(--gray-a2),inset 0 1.5px 2px 0 var(--black-a2)",
    2: "0 0 0 1px var(--gray-a3),0 0 0 0.5px var(--black-a1),0 1px 1px 0 var(--gray-a2),0 2px 1px -1px var(--black-a1),0 1px 3px 0 var(--black-a1)",
    3: "0 0 0 1px var(--gray-a3),0 2px 3px -2px var(--gray-a3),0 3px 12px -4px var(--black-a2),0 4px 16px -8px var(--black-a2)",
    4: "0 0 0 1px var(--gray-a3),0 8px 40px var(--black-a1),0 12px 32px -16px var(--gray-a3)",
    5: "0 0 0 1px var(--gray-a3),0 12px 60px var(--black-a3),0 12px 32px -16px var(--gray-a5)",
    6: "0 0 0 1px var(--gray-a3),0 12px 60px var(--black-a3),0 16px 64px var(--gray-a2),0 16px 36px -20px var(--gray-a7)",
  },
  zIndices: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    max: "999",
  },
});
