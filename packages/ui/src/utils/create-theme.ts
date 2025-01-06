import { theme } from "@/theme-contracts/theme-contract.css";
import { baseTheme } from "@/themes/base-theme.css";
import { getTextContrast } from "@/utils/get-text-contrast";
import * as colors from "@radix-ui/colors";
import { createTheme as ct } from "@vanilla-extract/css";

export const createTheme = (mode: "light" | "dark") =>
  ct(theme, {
    ...baseTheme, // Use shared variables as a baseline

    semanticColors: {
      primary: colors.violet.violet9,
      primaryLighter: colors.violet.violet10,
      primaryTextContrast: getTextContrast(colors.violet.violet9),

      secondary: colors.cyan.cyan9,
      secondaryLighter: colors.cyan.cyan10,
      secondaryTextContrast: getTextContrast(colors.cyan.cyan9),

      // - feedback colors
      error: colors.ruby.ruby9,
      errorLighter: colors.ruby.ruby10,
      errorTextContrast: getTextContrast(colors.ruby.ruby9),

      // success: ,
      // warning: ,
      // info: ,

      ...(mode === "light" ? lightModeColors : darkModeColors),
    },
  });

const lightModeColors = {
  background: "#ffffff",
  backgroundTextContrast: "#000000",

  surface: "#ffffff",
  surfaceTextContrast: "#000000",

  transparentSurface: "hsl(0 0% 0% / 97%)",
  transparentSurfaceTextContrast: "#ffffff",

  textSubtle: colors.slate.slate11,
  textPlaceholder: "#999999",

  line: colors.slateA.slateA4,

  transparentHover: colors.slateA.slateA3,
  transparentActive: colors.slateA.slateA4,
};

const darkModeColors = {
  background: "#121212",
  backgroundTextContrast: "#ffffff",

  surface: "#121212",
  surfaceTextContrast: "#ffffff",

  transparentSurface: "hsl(0 100% 100% / 97%)",
  transparentSurfaceTextContrast: "#000000",

  textSubtle: colors.slate.slate11,
  textPlaceholder: "#999999",

  line: colors.whiteA.whiteA4,

  transparentHover: colors.whiteA.whiteA3,
  transparentActive: colors.whiteA.whiteA4,
};
