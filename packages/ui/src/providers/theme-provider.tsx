import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { darkTheme } from "@/theme/themes/dark-theme.css";
import { lightTheme } from "@/theme/themes/light-theme.css";
import { ThemeMode } from "@/types/theme-mode";
import React, { createContext } from "react";

const defaultThemeMode: ThemeMode = "light";

export const ThemeContext = createContext<ThemeMode>(defaultThemeMode);

type ThemeProviderProps = {
  children: React.ReactNode;
  themeMode?: ThemeMode;
};

/**
 * This component applies the theme css. It should preferably be used at the root of your component tree.
 */
export const ThemeProvider = ({
  children,
  themeMode = defaultThemeMode,
}: ThemeProviderProps) => {
  const isDarkMode = themeMode === "dark";

  return (
    <ThemeContext value={themeMode}>
      <div
        className={isDarkMode ? darkTheme : lightTheme}
        style={{
          backgroundColor: theme.semanticColors.background,
          color: theme.semanticColors.backgroundTextContrast,
        }}
      >
        {children}
      </div>
    </ThemeContext>
  );
};
