import { darkTheme } from "@/theme/themes/dark-theme.css";
import { lightTheme } from "@/theme/themes/light-theme.css";
import { theme as Theme } from "@/types/theme";
import React, { createContext, useEffect, useState } from "react";

const themes: Theme[] = ["light", "dark", "system"];
const storageKey = "nayhoo-theme";

type ThemeContextProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  themes: Theme[];
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
  themes,
});

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

const defaultTheme = "system";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(() => getTheme());

  const applyTheme = (theme: Theme) => {
    const isDark = theme === "dark";
    const isSystem = theme === "system";

    if (
      isDark ||
      ((isSystem || !(storageKey in localStorage)) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html")?.classList.add(darkTheme);
      document.querySelector("html")?.classList.remove(lightTheme);
    } else {
      document.querySelector("html")?.classList.add(lightTheme);
      document.querySelector("html")?.classList.remove(darkTheme);
    }
  };

  useEffect(() => {
    applyTheme(theme);

    try {
      localStorage.setItem(storageKey, theme);
    } catch {}
  }, [theme]);

  return (
    <ThemeContext value={{ theme, setTheme, themes }}>
      <script>
        {`    
          const isDark = localStorage.getItem("${storageKey}") === "dark";
          const isSystem = localStorage.getItem("${storageKey}") === "system";

          if (
            isDark ||
            ((isSystem || !("${storageKey}" in localStorage)) &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
          ) {
            document.querySelector("html")?.classList.add("${darkTheme}");
            document.querySelector("html")?.classList.remove("${lightTheme}");
          } else {
            document.querySelector("html")?.classList.add("${lightTheme}");
            document.querySelector("html")?.classList.remove("${darkTheme}");
          }
        `}
      </script>

      {children}
    </ThemeContext>
  );
};

const getTheme = () => {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  let theme: string | undefined;

  try {
    theme = localStorage.getItem(storageKey) || undefined;
  } catch {}

  return themes.find((t) => t === theme) ?? defaultTheme;
};
