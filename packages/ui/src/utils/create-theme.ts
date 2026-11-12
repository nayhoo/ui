import { theme } from "@/theme/themes/theme-contract.css";
import type { SystemTheme } from "@/types/theme";
import { createGlobalTheme } from "@vanilla-extract/css";

const palette = {
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

const { color, shadow } = theme;

export const createTheme = (mode: SystemTheme) => {
  createGlobalTheme(
    `[data-theme="${mode}"]`,
    {
      color,
      shadow,
    },
    {
      ...t[mode],
    },
  );
};

const t = {
  light: {
    color: {
      actionable: {
        accented: {
          solid: {
            background: {
              initial: palette.brown500,
              active: palette.brown200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.brown500}`,
            },
            borderColor: {
              initial: palette.brown500,
              active: palette.brown500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.brown200,
              hover: palette.brown100,
            },
            borderColor: {
              initial: palette.brown500,
              active: palette.brown500,
              hover: palette.brown500,
            },
            foreground: {
              initial: palette.brown600,
              active: palette.black,
              hover: palette.brown700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.brown600,
              active: palette.black,
              hover: palette.brown700,
            },
          },
        },
        neutral: {
          solid: {
            background: {
              initial: palette.gray500,
              active: palette.gray200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.gray500}`,
            },
            borderColor: {
              initial: palette.gray500,
              active: palette.gray500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.gray200,
              hover: palette.gray100,
            },
            borderColor: {
              initial: palette.gray500,
              active: palette.gray500,
              hover: palette.gray500,
            },
            foreground: {
              initial: palette.gray600,
              active: palette.black,
              hover: palette.gray700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.gray600,
              active: palette.black,
              hover: palette.gray700,
            },
          },
        },
        caution: {
          solid: {
            background: {
              initial: palette.orange500,
              active: palette.orange200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.orange500}`,
            },
            borderColor: {
              initial: palette.orange500,
              active: palette.orange500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.orange200,
              hover: palette.orange100,
            },
            borderColor: {
              initial: palette.orange500,
              active: palette.orange500,
              hover: palette.orange500,
            },
            foreground: {
              initial: palette.orange600,
              active: palette.black,
              hover: palette.orange700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.orange600,
              active: palette.black,
              hover: palette.orange700,
            },
          },
        },
        negative: {
          solid: {
            background: {
              initial: palette.red500,
              active: palette.red200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.red500}`,
            },
            borderColor: {
              initial: palette.red500,
              active: palette.red500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.red200,
              hover: palette.red100,
            },
            borderColor: {
              initial: palette.red500,
              active: palette.red500,
              hover: palette.red500,
            },
            foreground: {
              initial: palette.red600,
              active: palette.black,
              hover: palette.red700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.red600,
              active: palette.black,
              hover: palette.red700,
            },
          },
        },
        positive: {
          solid: {
            background: {
              initial: palette.green500,
              active: palette.green200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.green500}`,
            },
            borderColor: {
              initial: palette.green500,
              active: palette.green500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.green200,
              hover: palette.green100,
            },
            borderColor: {
              initial: palette.green500,
              active: palette.green500,
              hover: palette.green500,
            },
            foreground: {
              initial: palette.green600,
              active: palette.black,
              hover: palette.green700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.green600,
              active: palette.black,
              hover: palette.green700,
            },
          },
        },
      },

      container: {
        primary: {
          background: palette.white,
        },
        secondary: {
          background: "rgb(245,247,248)",
          borderColor: palette.gray500,
        },
      },

      content: {
        primary: {
          foreground: palette.black,
          disabled: palette.black40a,
        },
        subtle: {
          foreground: palette.gray700,
          disabled: "rgba(76, 81, 87, 0.4)", // gray700a40
        },
        accent: {
          foreground: palette.brown600,
        },
        visited: {
          foreground: "rgb(73, 21, 82)", // purple800
        },
        // onSolid: {
        //   foreground: palette.white,
        // },
        error: {
          foreground: palette.red600,
        },
      },

      focused: {
        // onSolid: {
        //   outlineColor: palette.white80a,
        // },
        outlineColor: palette.brown700,
        outlineOffset: "0px",
        outlineStyle: "dotted",
        outlineWidth: "2px",
      },

      separable: {
        primary: {
          borderColor: palette.black40a,
        },
        secondary: {
          borderColor: palette.black30a,
        },
        tertiary: {
          borderColor: palette.black20a,
        },
      },

      selectable: {
        background: {
          selected: palette.brown200,
        },
        borderColor: {
          selected: palette.brown500,
        },
        foreground: {
          selected: palette.brown500,
        },
      },
    },

    shadow: {
      1: "0 1px 3px 0 rgba(0,0,0,0.1)",
      2: "0 2px 4px 0 rgba(0,0,0,0.1)",
      3: "0 4px 8px 0 rgba(0,0,0,0.15)",
      4: "0 6px 10px 0 rgba(0,0,0,0.2)",
      5: "0 12px 40px 0 rgba(0,0,0,0.3)",
    },
  },
  dark: {
    color: {
      actionable: {
        accented: {
          solid: {
            background: {
              initial: palette.brown500,
              active: palette.brown800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.brown500}`,
            },
            borderColor: {
              initial: palette.brown500,
              active: palette.brown500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.brown800,
              hover: palette.brown900,
            },
            borderColor: {
              initial: palette.brown500,
              active: palette.brown500,
              hover: palette.brown500,
            },
            foreground: {
              initial: palette.brown400,
              active: palette.white,
              hover: palette.brown300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.brown400,
              active: palette.white,
              hover: palette.brown300,
            },
          },
        },
        neutral: {
          solid: {
            background: {
              initial: palette.gray500,
              active: palette.gray800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.gray500}`,
            },
            borderColor: {
              initial: palette.gray500,
              active: palette.gray500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.gray800,
              hover: palette.gray900,
            },
            borderColor: {
              initial: palette.gray500,
              active: palette.gray500,
              hover: palette.gray500,
            },
            foreground: {
              initial: palette.gray400,
              active: palette.white,
              hover: palette.gray300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.gray400,
              active: palette.white,
              hover: palette.gray300,
            },
          },
        },
        caution: {
          solid: {
            background: {
              initial: palette.orange500,
              active: palette.orange800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.orange500}`,
            },
            borderColor: {
              initial: palette.orange500,
              active: palette.orange500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.orange800,
              hover: palette.orange900,
            },
            borderColor: {
              initial: palette.orange500,
              active: palette.orange500,
              hover: palette.orange500,
            },
            foreground: {
              initial: palette.orange400,
              active: palette.white,
              hover: palette.orange300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.orange400,
              active: palette.white,
              hover: palette.orange300,
            },
          },
        },
        negative: {
          solid: {
            background: {
              initial: palette.red500,
              active: palette.red800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.red500}`,
            },
            borderColor: {
              initial: palette.red500,
              active: palette.red500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.red800,
              hover: palette.red900,
            },
            borderColor: {
              initial: palette.red500,
              active: palette.red500,
              hover: palette.red500,
            },
            foreground: {
              initial: palette.red400,
              active: palette.white,
              hover: palette.red300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.red400,
              active: palette.white,
              hover: palette.red300,
            },
          },
        },
        positive: {
          solid: {
            background: {
              initial: palette.green500,
              active: palette.green800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.green500}`,
            },
            borderColor: {
              initial: palette.green500,
              active: palette.green500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.green800,
              hover: palette.green900,
            },
            borderColor: {
              initial: palette.green500,
              active: palette.green500,
              hover: palette.green500,
            },
            foreground: {
              initial: palette.green400,
              active: palette.white,
              hover: palette.green300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.green400,
              active: palette.white,
              hover: palette.green300,
            },
          },
        },
      },

      container: {
        primary: {
          background: "rgb(16,24,32)",
        },
        secondary: {
          background: "rgb(26,34,41)",
          borderColor: palette.gray500,
        },
      },

      content: {
        primary: {
          foreground: palette.white,
          disabled: palette.white40a,
        },
        subtle: {
          foreground: palette.gray300,
          disabled: "rgba(177, 181, 185, 0.4)", // gray300a40
        },
        accent: {
          foreground: palette.brown400,
        },
        visited: {
          foreground: "rgb(240, 214, 245)", // purple200
        },
        // onSolid: {
        //   foreground: palette.white,
        // },
        error: {
          foreground: palette.red400,
        },
      },

      focused: {
        // onSolid: {
        //   outlineColor: palette.white80a,
        // },
        outlineColor: palette.brown300,
        outlineOffset: "0px",
        outlineStyle: "dotted",
        outlineWidth: "2px",
      },

      selectable: {
        background: {
          selected: palette.brown800,
        },
        borderColor: {
          selected: palette.brown500,
        },
        foreground: {
          selected: palette.brown500,
        },
      },

      separable: {
        primary: {
          borderColor: palette.white40a,
        },
        secondary: {
          borderColor: palette.white30a,
        },
        tertiary: {
          borderColor: palette.white20a,
        },
      },
    },

    shadow: {
      1: "0 1px 3px 0 rgba(0,0,0,0.5)",
      2: "0 2px 4px 0 rgba(0,0,0,0.5)",
      3: "0 4px 8px 0 rgba(0,0,0,0.55)",
      4: "0 6px 10px 0 rgba(0,0,0,0.55)",
      5: "0 12px 40px 0 rgba(0,0,0,0.65)",
    },
  },
};
