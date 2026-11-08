import { theme } from "@/theme/themes/theme-contract.css";
import type { SystemTheme } from "@/types/theme";
import { createGlobalTheme } from "@vanilla-extract/css";

const color = {
  black: "rgb(0, 0, 0)",
  black5a: "rgba(0, 0, 0, 0.05)",
  black10a: "rgba(0, 0, 0, 0.1)",
  black15a: "rgba(0, 0, 0, 0.15)",
  black20a: "rgba(0, 0, 0, 0.2)",
  black30a: "rgba(0, 0, 0, 0.3)",
  black40a: "rgba(0, 0, 0, 0.4)",
  black50a: "rgba(0, 0, 0, 0.5)",
  black65a: "rgba(0, 0, 0, 0.65)",
  black80a: "rgba(0, 0, 0, 0.8)",
  white: "rgb(255, 255, 255)",
  white5a: "rgba(255, 255, 255, 0.05)",
  white10a: "rgba(255, 255, 255, 0.1)",
  white15a: "rgba(255, 255, 255, 0.15)",
  white20a: "rgba(255, 255, 255, 0.2)",
  white30a: "rgba(255, 255, 255, 0.3)",
  white40a: "rgba(255, 255, 255, 0.4)",
  white50a: "rgba(255, 255, 255, 0.5)",
  white65a: "rgba(255, 255, 255, 0.65)",
  white80a: "rgba(255, 255, 255, 0.8)",
  transparent: "transparent",
  gray100: "rgb(230, 233, 235)",
  gray200: "rgb(211, 213, 216)",
  gray300: "rgb(177, 181, 185)",
  gray400: "rgb(145, 149, 154)",
  gray500: "rgb(114, 119, 125)",
  gray600: "rgb(95, 100, 106)",
  gray700: "rgb(76, 81, 87)",
  gray800: "rgb(58, 63, 68)",
  gray900: "rgb(41, 46, 51)",
  brown100: "rgb(243, 238, 232)",
  brown200: "rgb(237, 229, 216)",
  brown300: "rgb(215, 186, 157)",
  brown400: "rgb(184, 138, 103)",
  brown500: "rgb(153, 108, 72)",
  brown600: "rgb(125, 83, 47)",
  brown700: "rgb(103, 63, 27)",
  brown800: "rgb(66, 36, 7)",
  brown900: "rgb(46, 25, 5)",
  green100: "rgb(234, 245, 242)",
  green200: "rgb(184, 229, 209)",
  green300: "rgb(137, 204, 173)",
  green400: "rgb(83, 176, 135)",
  green500: "rgb(0, 135, 93)",
  green600: "rgb(0, 107, 72)",
  green700: "rgb(0, 86, 55)",
  green800: "rgb(0, 63, 37)",
  green900: "rgb(0, 41, 21)",
  orange100: "rgb(255, 236, 217)",
  orange200: "rgb(255, 198, 161)",
  orange300: "rgb(247, 160, 106)",
  orange400: "rgb(235, 123, 57)",
  orange500: "rgb(199, 83, 0)",
  orange600: "rgb(158, 66, 0)",
  orange700: "rgb(129, 54, 0)",
  orange800: "rgb(97, 41, 0)",
  orange900: "rgb(66, 32, 0)",
  red100: "rgb(255, 236, 234)",
  red200: "rgb(255, 193, 186)",
  red300: "rgb(255, 147, 138)",
  red400: "rgb(255, 93, 87)",
  red500: "rgb(229, 33, 53)",
  red600: "rgb(186, 23, 41)",
  red700: "rgb(145, 13, 30)",
  red800: "rgb(105, 4, 19)",
  red900: "rgb(69, 0, 2)",
};

export const createTheme = (mode: SystemTheme) => {
  return createGlobalTheme(`[data-theme="${mode}"]`, theme.color, {
    primary: {
      primary1: "",
      primary2: "",
      primary3: "",
      primary4: "",
      primary5: "",
      primary6: "",
      primary7: "",
      primary8: "",
      primary9: "",
      primary10: "",
      primary11: "",
      primary12: "",
    },
    primaryA: {
      primaryA1: "",
      primaryA2: "",
      primaryA3: "",
      primaryA4: "",
      primaryA5: "",
      primaryA6: "",
      primaryA7: "",
      primaryA8: "",
      primaryA9: "",
      primaryA10: "",
      primaryA11: "",
      primaryA12: "",
    },

    secondary: {
      secondary1: "",
      secondary2: "",
      secondary3: "",
      secondary4: "",
      secondary5: "",
      secondary6: "",
      secondary7: "",
      secondary8: "",
      secondary9: "",
      secondary10: "",
      secondary11: "",
      secondary12: "",
    },
    secondaryA: {
      secondaryA1: "",
      secondaryA2: "",
      secondaryA3: "",
      secondaryA4: "",
      secondaryA5: "",
      secondaryA6: "",
      secondaryA7: "",
      secondaryA8: "",
      secondaryA9: "",
      secondaryA10: "",
      secondaryA11: "",
      secondaryA12: "",
    },

    // - feedback colors
    error: {
      error1: "",
      error2: "",
      error3: "",
      error4: "",
      error5: "",
      error6: "",
      error7: "",
      error8: "",
      error9: "",
      error10: "",
      error11: "",
      error12: "",
    },
    errorA: {
      errorA1: "",
      errorA2: "",
      errorA3: "",
      errorA4: "",
      errorA5: "",
      errorA6: "",
      errorA7: "",
      errorA8: "",
      errorA9: "",
      errorA10: "",
      errorA11: "",
      errorA12: "",
    },

    success: {
      success1: "",
      success2: "",
      success3: "",
      success4: "",
      success5: "",
      success6: "",
      success7: "",
      success8: "",
      success9: "",
      success10: "",
      success11: "",
      success12: "",
    },
    successA: {
      successA1: "",
      successA2: "",
      successA3: "",
      successA4: "",
      successA5: "",
      successA6: "",
      successA7: "",
      successA8: "",
      successA9: "",
      successA10: "",
      successA11: "",
      successA12: "",
    },

    ...(mode === "light" ? lightTheme : darkTheme),
  });
};

const lightTheme = {
  background: color.white,
  backgroundTextContrast: color.black,

  surface: color.white,
  surfaceTextContrast: color.black,

  transparentSurface: "hsl(0 0% 0% / 97%)",
  transparentSurfaceTextContrast: color.white,

  textSubtle: "", // colors.slate.slate11,
  textPlaceholder: "#999999",

  line: "", // colors.slateA.slateA4,

  transparentHover: "", // colors.slateA.slateA3,
  transparentActive: "", // colors.slateA.slateA4,

  shadow: "hsl(206 22% 7% / 35%)",

  //

  actionable: {
    accented: {
      solid: {
        background: {
          initial: color.brown500,
          active: color.brown200,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.brown500}`,
        },
        borderColor: {
          initial: color.brown500,
          active: color.brown500,
          hover: color.black30a,
        },
        foreground: {
          initial: color.white,
          active: color.black,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.brown200,
          hover: color.brown100,
        },
        borderColor: {
          initial: color.brown500,
          active: color.brown500,
          hover: color.brown500,
        },
        foreground: {
          initial: color.brown600,
          active: color.black,
          hover: color.brown700,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.black15a,
          hover: color.black10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.brown600,
          active: color.black,
          hover: color.brown700,
        },
      },
    },
    neutral: {
      solid: {
        background: {
          initial: color.gray500,
          active: color.gray200,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.gray500}`,
        },
        borderColor: {
          initial: color.gray500,
          active: color.gray500,
          hover: color.black30a,
        },
        foreground: {
          initial: color.white,
          active: color.black,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.gray200,
          hover: color.gray100,
        },
        borderColor: {
          initial: color.gray500,
          active: color.gray500,
          hover: color.gray500,
        },
        foreground: {
          initial: color.gray600,
          active: color.black,
          hover: color.gray700,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.black15a,
          hover: color.black10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.gray600,
          active: color.black,
          hover: color.gray700,
        },
      },
    },
    caution: {
      solid: {
        background: {
          initial: color.orange500,
          active: color.orange200,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.orange500}`,
        },
        borderColor: {
          initial: color.orange500,
          active: color.orange500,
          hover: color.black30a,
        },
        foreground: {
          initial: color.white,
          active: color.black,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.orange200,
          hover: color.orange100,
        },
        borderColor: {
          initial: color.orange500,
          active: color.orange500,
          hover: color.orange500,
        },
        foreground: {
          initial: color.orange600,
          active: color.black,
          hover: color.orange700,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.black15a,
          hover: color.black10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.orange600,
          active: color.black,
          hover: color.orange700,
        },
      },
    },
    negative: {
      solid: {
        background: {
          initial: color.red500,
          active: color.red200,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.red500}`,
        },
        borderColor: {
          initial: color.red500,
          active: color.red500,
          hover: color.black30a,
        },
        foreground: {
          initial: color.white,
          active: color.black,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.red200,
          hover: color.red100,
        },
        borderColor: {
          initial: color.red500,
          active: color.red500,
          hover: color.red500,
        },
        foreground: {
          initial: color.red600,
          active: color.black,
          hover: color.red700,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.black15a,
          hover: color.black10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.red600,
          active: color.black,
          hover: color.red700,
        },
      },
    },
    positive: {
      solid: {
        background: {
          initial: color.green500,
          active: color.green200,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.green500}`,
        },
        borderColor: {
          initial: color.green500,
          active: color.green500,
          hover: color.black30a,
        },
        foreground: {
          initial: color.white,
          active: color.black,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.green200,
          hover: color.green100,
        },
        borderColor: {
          initial: color.green500,
          active: color.green500,
          hover: color.green500,
        },
        foreground: {
          initial: color.green600,
          active: color.black,
          hover: color.green700,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.black15a,
          hover: color.black10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.green600,
          active: color.black,
          hover: color.green700,
        },
      },
    },
  },
};

const darkTheme = {
  background: "#121212",
  backgroundTextContrast: color.white,

  surface: "#121212",
  surfaceTextContrast: color.white,

  transparentSurface: "hsl(0 100% 100% / 97%)",
  transparentSurfaceTextContrast: color.black,

  textSubtle: "", // colors.slate.slate11,
  textPlaceholder: "#999999",

  line: "", // colors.whiteA.whiteA4,

  transparentHover: "", // colors.whiteA.whiteA3,
  transparentActive: "", // colors.whiteA.whiteA4,

  shadow: "hsl(206 22% 7% / 20%)",

  //

  actionable: {
    accented: {
      solid: {
        background: {
          initial: color.brown500,
          active: color.brown800,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.brown500}`,
        },
        borderColor: {
          initial: color.brown500,
          active: color.brown500,
          hover: color.white30a,
        },
        foreground: {
          initial: color.white,
          active: color.white,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.brown800,
          hover: color.brown900,
        },
        borderColor: {
          initial: color.brown500,
          active: color.brown500,
          hover: color.brown500,
        },
        foreground: {
          initial: color.brown400,
          active: color.white,
          hover: color.brown300,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.white15a,
          hover: color.white10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.brown400,
          active: color.white,
          hover: color.brown300,
        },
      },
    },
    neutral: {
      solid: {
        background: {
          initial: color.gray500,
          active: color.gray800,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.gray500}`,
        },
        borderColor: {
          initial: color.gray500,
          active: color.gray500,
          hover: color.white30a,
        },
        foreground: {
          initial: color.white,
          active: color.white,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.gray800,
          hover: color.gray900,
        },
        borderColor: {
          initial: color.gray500,
          active: color.gray500,
          hover: color.gray500,
        },
        foreground: {
          initial: color.gray400,
          active: color.white,
          hover: color.gray300,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.white15a,
          hover: color.white10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.gray400,
          active: color.white,
          hover: color.gray300,
        },
      },
    },
    caution: {
      solid: {
        background: {
          initial: color.orange500,
          active: color.orange800,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.orange500}`,
        },
        borderColor: {
          initial: color.orange500,
          active: color.orange500,
          hover: color.white30a,
        },
        foreground: {
          initial: color.white,
          active: color.white,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.orange800,
          hover: color.orange900,
        },
        borderColor: {
          initial: color.orange500,
          active: color.orange500,
          hover: color.orange500,
        },
        foreground: {
          initial: color.orange400,
          active: color.white,
          hover: color.orange300,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.white15a,
          hover: color.white10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.orange400,
          active: color.white,
          hover: color.orange300,
        },
      },
    },
    negative: {
      solid: {
        background: {
          initial: color.red500,
          active: color.red800,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.red500}`,
        },
        borderColor: {
          initial: color.red500,
          active: color.red500,
          hover: color.white30a,
        },
        foreground: {
          initial: color.white,
          active: color.white,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.red800,
          hover: color.red900,
        },
        borderColor: {
          initial: color.red500,
          active: color.red500,
          hover: color.red500,
        },
        foreground: {
          initial: color.red400,
          active: color.white,
          hover: color.red300,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.white15a,
          hover: color.white10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.red400,
          active: color.white,
          hover: color.red300,
        },
      },
    },
    positive: {
      solid: {
        background: {
          initial: color.green500,
          active: color.green800,
          hover: `linear-gradient(${color.black15a},${color.black15a}) ${color.green500}`,
        },
        borderColor: {
          initial: color.green500,
          active: color.green500,
          hover: color.white30a,
        },
        foreground: {
          initial: color.white,
          active: color.white,
          hover: color.white,
        },
      },
      bordered: {
        background: {
          initial: color.transparent,
          active: color.green800,
          hover: color.green900,
        },
        borderColor: {
          initial: color.green500,
          active: color.green500,
          hover: color.green500,
        },
        foreground: {
          initial: color.green400,
          active: color.white,
          hover: color.green300,
        },
      },
      ghost: {
        background: {
          initial: color.transparent,
          active: color.white15a,
          hover: color.white10a,
        },
        borderColor: {
          initial: color.transparent,
          active: color.transparent,
          hover: color.transparent,
        },
        foreground: {
          initial: color.green400,
          active: color.white,
          hover: color.green300,
        },
      },
    },
  },
};
