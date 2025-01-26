import { theme } from "@/theme-contracts/theme-contract.css";
import { baseTheme } from "@/themes/base-theme.css";
import * as colors from "@radix-ui/colors";
import { createTheme as ct } from "@vanilla-extract/css";
import { getTextContrast } from "./get-text-contrast";

export const createTheme = (mode: "light" | "dark") => {
  const primary = "violet";
  const secondary = "cyan";
  const error = "ruby";

  return ct(theme, {
    ...baseTheme, // Use shared variables as a baseline

    semanticColors: {
      primary: {
        primary1: colors[primary][`${primary}1`],
        primary2: colors[primary][`${primary}2`],
        primary3: colors[primary][`${primary}3`],
        primary4: colors[primary][`${primary}4`],
        primary5: colors[primary][`${primary}5`],
        primary6: colors[primary][`${primary}6`],
        primary7: colors[primary][`${primary}7`],
        primary8: colors[primary][`${primary}8`],
        primary9: colors[primary][`${primary}9`],
        primary10: colors[primary][`${primary}10`],
        primary11: colors[primary][`${primary}11`],
        primary12: colors[primary][`${primary}12`],
      },
      primaryA: {
        primaryA1: colors[primary][`${primary}1`],
        primaryA2: colors[primary][`${primary}2`],
        primaryA3: colors[primary][`${primary}3`],
        primaryA4: colors[primary][`${primary}4`],
        primaryA5: colors[primary][`${primary}5`],
        primaryA6: colors[primary][`${primary}6`],
        primaryA7: colors[primary][`${primary}7`],
        primaryA8: colors[primary][`${primary}8`],
        primaryA9: colors[primary][`${primary}9`],
        primaryA10: colors[primary][`${primary}10`],
        primaryA11: colors[primary][`${primary}11`],
        primaryA12: colors[primary][`${primary}12`],
      },
      primaryTextContrast: getTextContrast(colors[primary][`${primary}9`]), // TODO: make this applicable for all shades?

      secondary: {
        secondary1: colors[secondary][`${secondary}1`],
        secondary2: colors[secondary][`${secondary}2`],
        secondary3: colors[secondary][`${secondary}3`],
        secondary4: colors[secondary][`${secondary}4`],
        secondary5: colors[secondary][`${secondary}5`],
        secondary6: colors[secondary][`${secondary}6`],
        secondary7: colors[secondary][`${secondary}7`],
        secondary8: colors[secondary][`${secondary}8`],
        secondary9: colors[secondary][`${secondary}9`],
        secondary10: colors[secondary][`${secondary}10`],
        secondary11: colors[secondary][`${secondary}11`],
        secondary12: colors[secondary][`${secondary}12`],
      },
      secondaryA: {
        secondaryA1: colors[secondary][`${secondary}1`],
        secondaryA2: colors[secondary][`${secondary}2`],
        secondaryA3: colors[secondary][`${secondary}3`],
        secondaryA4: colors[secondary][`${secondary}4`],
        secondaryA5: colors[secondary][`${secondary}5`],
        secondaryA6: colors[secondary][`${secondary}6`],
        secondaryA7: colors[secondary][`${secondary}7`],
        secondaryA8: colors[secondary][`${secondary}8`],
        secondaryA9: colors[secondary][`${secondary}9`],
        secondaryA10: colors[secondary][`${secondary}10`],
        secondaryA11: colors[secondary][`${secondary}11`],
        secondaryA12: colors[secondary][`${secondary}12`],
      },
      secondaryTextContrast: getTextContrast(colors[secondary][`${secondary}9`]),

      // - feedback colors
      error: {
        error1: colors[error][`${error}1`],
        error2: colors[error][`${error}2`],
        error3: colors[error][`${error}3`],
        error4: colors[error][`${error}4`],
        error5: colors[error][`${error}5`],
        error6: colors[error][`${error}6`],
        error7: colors[error][`${error}7`],
        error8: colors[error][`${error}8`],
        error9: colors[error][`${error}9`],
        error10: colors[error][`${error}10`],
        error11: colors[error][`${error}11`],
        error12: colors[error][`${error}12`],
      },
      errorA: {
        errorA1: colors[error][`${error}1`],
        errorA2: colors[error][`${error}2`],
        errorA3: colors[error][`${error}3`],
        errorA4: colors[error][`${error}4`],
        errorA5: colors[error][`${error}5`],
        errorA6: colors[error][`${error}6`],
        errorA7: colors[error][`${error}7`],
        errorA8: colors[error][`${error}8`],
        errorA9: colors[error][`${error}9`],
        errorA10: colors[error][`${error}10`],
        errorA11: colors[error][`${error}11`],
        errorA12: colors[error][`${error}12`],
      },
      errorTextContrast: getTextContrast(colors[error][`${error}9`]),

      // success: ,
      // warning: ,
      // info: ,

      ...(mode === "light" ? lightModeColors : darkModeColors),
    },
  });
};

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
