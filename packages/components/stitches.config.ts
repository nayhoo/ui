import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export type { VariantProps } from "@stitches/react";
import * as colors from "./colors";
// import { getContrastTextColor } from "@nayhoo/utils";

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } =
  createStitches({
    theme: {
      colors: {
        ...colors,

        // Semantic colors
        primary: "#0000ff",
        secondary: "#8f4000",
        accent: "#ea3600",
        neutral: "#080800",

        canvas: "#ffffff",
        panel: "#ffffff",

        info: "#00edff",
        success: "#00ca76",
        warning: "#ff5800",
        error: "#f5184c",

        textPrimary: "#000000",
        textSecondary: "#808080",
        textAccent: "$accent", // could this just be accent?
        textDisabled: "rgba(0, 0, 0, 0.38)",

        // can these all below be programmically calculated?
        bgHover: "rgba(0, 0, 0, 0.04)",
        bgFocus: "rgba(0, 0, 0, 0.12)",
        bgSelected: "rgba(0, 0, 0, 0.04)", // of primary
        bgActivated: "rgba(0, 0, 0, 0.04)", // of primary
        bgPressed: "rgba(0, 0, 0, 0.12)",
        bgDragged: "rgba(0, 0, 0, 0.08)",
        bgDisabled: "rgba(0, 0, 0, 0.12)",

        /** (dividers, button outlines etc ...) */
        line: "rgba(0, 0, 0, 0.12)",
        shadow: "rgba(0, 0, 0, 0.12)",
      },
      fonts: {},
      fontSizes: {
        1: "11px",
        2: "13px",
        3: "15px",
        4: "18px",
        5: "20px",
        6: "22px",
        7: "28px",
        8: "36px",
        9: "60px",
      },
      fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      radii: {
        1: "4px",
        2: "6px",
        3: "8px",
        4: "12px",
        round: "50%",
        pill: "9999px",
      },
      sizes: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "20px",
        5: "24px",
        6: "32px",
        7: "48px",
        8: "64px",
        9: "80px",
      },
      space: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "20px",
        5: "24px",
        6: "32px",
        7: "48px",
        8: "64px",
        9: "80px",
      },
      zIndices: {
        1: "100",
        2: "200",
        3: "300",
        4: "400",
        max: "999",
      },
    },
    media: {
      bp1: "(min-width: 520px)",
      bp2: "(min-width: 900px)",
      bp3: "(min-width: 1200px)",
      bp4: "(min-width: 1800px)",
      motion: "(prefers-reduced-motion)",
      hover: "(any-hover: hover)",
      dark: "(prefers-color-scheme: dark)",
      light: "(prefers-color-scheme: light)",
    },
    utils: {
      /** Shorthand for applying padding */
      p: (value: any) => ({
        padding: value,
      }),
      /** Shorthand for applying paddingTop */
      pt: (value: any) => ({
        paddingTop: value,
      }),
      /** Shorthand for applying paddingRight */
      pr: (value: any) => ({
        paddingRight: value,
      }),
      /** Shorthand for applying paddingBottom */
      pb: (value: any) => ({
        paddingBottom: value,
      }),
      /** Shorthand for applying paddingLeft */
      pl: (value: any) => ({
        paddingLeft: value,
      }),
      /** A property for applying paddingLeft/paddingRight together */
      px: (value: any) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      /** A property for applying paddingTop/paddingBottom together */
      py: (value: any) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      /** Shorthand for applying margin */
      m: (value: any) => ({
        margin: value,
      }),
      /** Shorthand for applying marginTop */
      mt: (value: any) => ({
        marginTop: value,
      }),
      /** Shorthand for applying marginRight */
      mr: (value: any) => ({
        marginRight: value,
      }),
      /** Shorthand for applying marginBottom */
      mb: (value: any) => ({
        marginBottom: value,
      }),
      /** Shorthand for applying marginLeft */
      ml: (value: any) => ({
        marginLeft: value,
      }),
      /** A property for applying marginLeft/marginRight together */
      mx: (value: any) => ({
        marginLeft: value,
        marginRight: value,
      }),
      /** A property for applying marginTop/marginBottom together */
      my: (value: any) => ({
        marginTop: value,
        marginBottom: value,
      }),
      /** A property for applying width/height together */
      size: (value: any) => ({
        width: value,
        height: value,
      }),
      /** A property for applying `grid-template-columns: repeat(x, minmax(0, xfr))` where `x` is the value supplied */
      gridCols: (value: number) => ({
        gridTemplateColumns: `repeat(${value}, minmax(0, ${value}fr))`,
      }),
      /** A property for applying `grid-template-rows: repeat(x, minmax(0, xfr))` where `x` is the value supplied */
      gridRows: (value: number) => ({
        gridTemplateRows: `repeat(${value}, minmax(0, ${value}fr))`,
      }),
      /** A property for applying the contrast text color for the supplied $bgColor  */
      // contrastTextColor: (bgColor: string) => ({
      //   color: getContrastTextColor(theme.colors[bgColor.slice(1)]),
      // }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;

// const injectGlobalStyles = globalCss({
//   body: {
//     margin: 0,
//     padding: 0,

//     backgroundColor: colors.white,

//     // dark theme global overrides
//     "&.dark": {
//       backgroundColor: "hsl(240 10% 3.9%)",
//       color: colors.white,
//     },
//   },
// });

// injectGlobalStyles();

export const darkTheme = createTheme("dark", {
  colors: {
    canvas: "hsl(240 10% 3.9%)",
    panel: colors.black,

    shadow: "hsl(206 22% 7% / 20%)",
  },
});
