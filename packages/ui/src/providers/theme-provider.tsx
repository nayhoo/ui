import { theme } from "@/theme-contracts/theme-contract.css";
import { darkTheme as nayhooDarkTheme } from "@/themes/dark-theme.css";
import { lightTheme as nayhooLightTheme } from "@/themes/light-theme.css";
import { createContext } from "react";

export const ThemeContext = createContext<string>("");

type ThemeProviderProps = {
  children: React.ReactNode;
  mode?: "light" | "dark";
  lightTheme?: string;
  darkTheme?: string;
};

/** TODO: add doco */
export const ThemeProvider = ({
  children,
  mode = "light",
  lightTheme = nayhooLightTheme,
  darkTheme = nayhooDarkTheme,
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
