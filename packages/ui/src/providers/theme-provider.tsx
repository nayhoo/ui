// Credit: https://github.com/pacocoursey/next-themes/blob/main/next-themes/src/index.tsx

import { darkTheme } from "@/theme/themes/dark-theme.css";
import { lightTheme } from "@/theme/themes/light-theme.css";
import { Theme } from "@/types/theme";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { script } from "./script";

const MEDIA = "(prefers-color-scheme: dark)";
const isServer = typeof window === "undefined";

const storageKey = "nayhoo-theme";
const themes: Theme[] = ["light", "dark", "system"];
const defaultTheme: Theme = "system";

type ResolvedTheme = Exclude<Theme, "system">;
const classes: Record<ResolvedTheme, string> = {
  light: lightTheme,
  dark: darkTheme,
};

type ThemeContextProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  resolvedTheme: ResolvedTheme;
  themes: Theme[];
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
  resolvedTheme: "light",
  themes,
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(() => getTheme());
  const [resolvedTheme, setResolvedTheme] = useState(() =>
    theme === "system" ? getSystemTheme() : theme,
  );

  const applyTheme = useCallback((theme: Theme) => {
    const resolved = resolveTheme(theme);

    setResolvedTheme(resolved);

    const d = document.documentElement;
    d.classList.remove(...Object.values(classes));
    d.classList.add(classes[resolved]);
  }, []);

  useEffect(() => {
    applyTheme(theme);

    try {
      localStorage.setItem(storageKey, theme);
    } catch {}
  }, [applyTheme, theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme: theme === "system" ? resolvedTheme : theme,
      themes,
    }),
    [theme, setTheme, resolvedTheme],
  );

  const scriptArgs = JSON.stringify([storageKey, defaultTheme, classes]).slice(
    1,
    -1,
  );

  return (
    <ThemeContext value={value}>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `(${script.toString()})(${scriptArgs})`,
        }}
      />

      {children}
    </ThemeContext>
  );
};

const getTheme = () => {
  if (isServer) return defaultTheme;
  let themeName: string | undefined;

  try {
    themeName = localStorage.getItem(storageKey) || undefined;
  } catch (e) {
    // Unsupported
  }

  return themes.find((theme) => theme === themeName) || defaultTheme;
};

const getSystemTheme = (
  e?: MediaQueryList | MediaQueryListEvent,
): ResolvedTheme => {
  if (!e) e = window.matchMedia(MEDIA);
  const isDark = e.matches;
  const systemTheme = isDark ? "dark" : "light";

  return systemTheme;
};

const resolveTheme = (theme: Theme) => {
  let resolved = theme;

  if (theme === "system") {
    resolved = getSystemTheme();
  }

  return resolved as ResolvedTheme;
};
