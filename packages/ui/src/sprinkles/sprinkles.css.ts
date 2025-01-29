import { theme } from "@/theme-contracts/theme-contract.css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const responsiveProperties = defineProperties({
  // https://www.radix-ui.com/themes/docs/theme/breakpoints
  conditions: {
    /** Phones (portrait) */
    initial: {},
    /** Phones (landscape) */
    xs: { "@media": "screen and (min-width: 520px)" },
    /** Tablets (portrait) */
    sm: { "@media": "screen and (min-width: 768px)" },
    /** Tablets (landscape) */
    md: { "@media": "screen and (min-width: 1024px)" },
    /** Laptops */
    lg: { "@media": "screen and (min-width: 1280px)" },
    /** Desktops */
    xl: { "@media": "screen and (min-width: 1640px)" },
  },
  defaultCondition: "initial",
  properties: {
    display: ["block", "flex", "initial", "none"],
    flexDirection: ["column", "column-reverse", "row", "row-reverse"],
    gridTemplateColumns: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 2fr))",
      3: "repeat(3, minmax(0, 3fr))",
      4: "repeat(4, minmax(0, 4fr))",
      5: "repeat(5, minmax(0, 5fr))",
      6: "repeat(6, minmax(0, 6fr))",
      7: "repeat(7, minmax(0, 7fr))",
      8: "repeat(8, minmax(0, 8fr))",
      9: "repeat(9, minmax(0, 9fr))",
      10: "repeat(10, minmax(0, 10fr))",
    },
    gridTemplateRows: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 2fr))",
      3: "repeat(3, minmax(0, 3fr))",
      4: "repeat(4, minmax(0, 4fr))",
      5: "repeat(5, minmax(0, 5fr))",
      6: "repeat(6, minmax(0, 6fr))",
      7: "repeat(7, minmax(0, 7fr))",
      8: "repeat(8, minmax(0, 8fr))",
      9: "repeat(9, minmax(0, 9fr))",
      10: "repeat(10, minmax(0, 10fr))",
    },
    marginTop: theme.space,
    marginBottom: theme.space,
    marginLeft: theme.space,
    marginRight: theme.space,
    order: [-1, "unset"],
    paddingTop: theme.space,
    paddingBottom: theme.space,
    paddingLeft: theme.space,
    paddingRight: theme.space,
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
