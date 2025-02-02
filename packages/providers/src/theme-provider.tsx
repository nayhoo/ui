import { darkTheme, lightTheme, theme } from "@nayhoo/ui";
import React, { createContext } from "react";

export const ThemeContext = createContext<string>("");

type ThemeProviderProps = {
  children: React.ReactNode;
  mode?: "light" | "dark";
};

/** TODO: add doco */
export const ThemeProvider = ({
  children,
  mode = "light",
}: ThemeProviderProps) => {
  const isDarkMode = mode === "dark";

  return (
    <ThemeContext value={mode}>
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
