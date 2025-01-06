import { createThemeContract } from "@vanilla-extract/css";

export const semanticColorsContract = createThemeContract({
  // semantic colors
  primary: null,
  primaryLighter: null,
  primaryTextContrast: null,

  secondary: null,
  secondaryLighter: null,
  secondaryTextContrast: null,

  error: null,
  errorLighter: null,
  errorTextContrast: null,

  // success: ,
  // warning: ,
  // info: ,

  background: null,
  backgroundTextContrast: null,

  surface: null,
  surfaceTextContrast: null,

  transparentSurface: null,
  transparentSurfaceTextContrast: null,

  textSubtle: null,
  textPlaceholder: null,

  /** Dividers, outlines etc. */
  line: null,

  transparentHover: null,
  transparentActive: null,
});
