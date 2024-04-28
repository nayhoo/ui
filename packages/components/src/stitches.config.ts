import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import * as colors from "./colors";

export type { VariantProps } from "@stitches/react";

export const { config, createTheme, css, getCssText, globalCss, keyframes, reset, styled, theme } =
  createStitches({
    theme: {
      colors: {
        ...colors,

        // Semantic colors
        // reference: https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes

        // todo: turn this into a theme helper?
        primary: "#6200ee",
        primaryLighter: "#8133f1",
        primaryDarker: "#4400a6",
        primaryTextContrast: colors.white,

        secondary: "#03dac6",
        secondaryLighter: "#35e1d1",
        secondaryDarker: "#02988a",
        secondaryTextContrast: colors.black,

        error: "#b00020",
        errorLighter: "#bf334c",
        errorDarker: "#7b0016",
        errorTextContrast: colors.white,

        background: colors.white,
        surface: colors.white,
        transparentSurface: "hsl(0 0% 0% / 97%)",

        backgroundTextContrast: colors.black,
        surfaceTextContrast: colors.black,
        transparentSurfaceTextContrast: colors.white,

        textDescription: "#666666",
        textDisabled: "#cccccc",
        textLabel: "#666666",
        textPlaceholder: "#999999",

        // todo: can these all below be calculated with a theme helper?
        transparentHover: "rgba(0, 0, 0, 0.04)",
        transparentFocus: "rgba(0, 0, 0, 0.12)",
        transparentSelected: "rgba(0, 0, 0, 0.04)",
        transparentActivated: "rgba(0, 0, 0, 0.04)",
        transparentPressed: "rgba(0, 0, 0, 0.12)",
        transparentDragged: "rgba(0, 0, 0, 0.08)",
        transparentDisabled: "#f2f2f2",

        transparentOverlay: "rgba(0, 0, 0, .15)",

        divider: "rgba(0, 0, 0, 0.12)",
        shadow: "rgba(0, 0, 0, 0.12)",
      },
      fonts: {},
      fontSizes: {
        /** 12px */
        xs: "0.75rem",
        /** 14px */
        sm: "0.875rem",
        /** 16px */
        base: "1rem",
        /** 18px */
        lg: "1.125rem",
        /** 20px */
        xl: "1.25rem",
        /** 24px */
        "2xl": "1.5rem",
        /** 30px */
        "3xl": "1.875rem",
        /** 36px */
        "4xl": "2.25rem",
        /** 48px */
        "5xl": "3rem",
        /** 60px */
        "6xl": "3.75rem",
        /** 72px */
        "7xl": "4.5rem",
        /** 96px */
        "8xl": "6rem",
        /** 128px */
        "9xl": "8rem",
      },
      fontWeights: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      radii: {
        none: "0px",
        /** 2px */
        sm: "0.125rem",
        /** 4px */
        md: "0.25rem",
        /** 6px */
        lg: "0.375rem",
        /** 8px */
        xl: "0.5rem",
        /** 12px */
        "2xl": "0.75rem",
        /** 16px */
        "3xl": "1rem",
        round: "50%",
        full: "9999px",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        auto: "auto",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      },
      space: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        auto: "auto",
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
      // /** A property for applying the contrast text color for the supplied $bgColor  */
      // contrastTextColor: (bgColor: string) => ({
      //   color: getContrastTextColor(theme.colors[bgColor.slice(1)]),
      // }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme("dark", {
  colors: {
    primary: "#6200ee",
    primaryLighter: "#8133f1",
    primaryDarker: "#4400a6",
    primaryTextContrast: colors.white,

    secondary: "#03dac6",
    secondaryLighter: "#35e1d1",
    secondaryDarker: "#02988a",
    secondaryTextContrast: colors.black,

    error: "#b00020",
    errorLighter: "#bf334c",
    errorDarker: "#7b0016",
    errorTextContrast: colors.white,

    background: "#121212",
    surface: "#121212",
    transparentSurface: "hsl(0 100% 100% / 97%)",

    backgroundTextContrast: colors.white,
    surfaceTextContrast: colors.white,
    transparentSurfaceTextContrast: colors.black,

    textDescription: "#666666",
    textDisabled: "#cccccc",
    textLabel: "#666666",
    textPlaceholder: "#999999",

    transparentHover: "rgba(255, 255, 255, 0.04)",
    transparentFocus: "rgba(255, 255, 255, 0.12)",
    transparentSelected: "rgba(255, 255, 255, 0.04)",
    transparentActivated: "rgba(255, 255, 255, 0.04)",
    transparentPressed: "rgba(255, 255, 255, 0.12)",
    transparentDragged: "rgba(255, 255, 255, 0.08)",
    transparentDisabled: "#f2f2f2",

    transparentOverlay: "rgba(255, 255, 255, .15)",

    divider: "rgba(255, 255, 255, 0.12)",
    shadow: "rgba(255, 255, 255, 0.12)",
  },
});

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,

    backgroundColor: "$background",
    color: "$backgroundTextContrast",
  },
});
