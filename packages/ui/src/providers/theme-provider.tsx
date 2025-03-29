"use client";

import { darkTheme } from "@/theme/themes/dark-theme.css";
import { lightTheme } from "@/theme/themes/light-theme.css";
import { SystemTheme } from "@/types/system-theme";
import { Theme as ITheme } from "@/types/theme";
import * as React from "react";

const classes: Record<SystemTheme, string> = {
  light: lightTheme,
  dark: darkTheme,
};
const defaultTheme: ITheme = "system";
const storageKey = "nayhoo-theme";
const systemThemes: SystemTheme[] = ["light", "dark"];
const themes: ITheme[] = [...systemThemes, "system"];

// Credits: https://github.com/pacocoursey/next-themes/blob/main/next-themes/src/types.ts
interface ScriptProps
  extends React.DetailedHTMLProps<
    React.ScriptHTMLAttributes<HTMLScriptElement>,
    HTMLScriptElement
  > {}

export interface UseThemeProps {
  /** List of all available theme names */
  themes: ITheme[];
  /** Update the theme */
  setTheme: (value: ITheme) => void;
  /** Active theme name */
  theme?: ITheme | undefined;
  /** If the active theme is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `theme` */
  resolvedTheme?: ITheme | undefined;
  /** Returns the System theme preference ("dark" or "light"), regardless what the active theme is */
  systemTheme?: SystemTheme | undefined;
}

export interface ThemeProviderProps extends React.PropsWithChildren {
  /** Props to pass the inline script */
  scriptProps?: ScriptProps;
}

// Credits: https://github.com/pacocoursey/next-themes/blob/main/next-themes/src/index.tsx
const colorSchemes: SystemTheme[] = ["light", "dark"];
const MEDIA = "(prefers-color-scheme: dark)";
const isServer = typeof window === "undefined";
const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = {
  setTheme: () => {
    // TODO: something about needs to be in a provider
  },
  themes,
};

const saveToLS = (storageKey: string, value: string) => {
  // Save to storage
  try {
    localStorage.setItem(storageKey, value);
  } catch (e) {
    // Unsupported
  }
};

export const useTheme = () => React.useContext(ThemeContext) ?? defaultContext;

export const ThemeProvider = (props: ThemeProviderProps) => {
  const context = React.useContext(ThemeContext);

  // Ignore nested context providers, just passthrough children
  if (context) return <>{props.children}</>;

  return <Theme {...props} />;
};

const Theme = ({ children, scriptProps }: ThemeProviderProps) => {
  const [theme, setThemeState] = React.useState(() => getTheme());
  const [resolvedTheme, setResolvedTheme] = React.useState(() =>
    theme === "system" ? getSystemTheme() : theme,
  );

  const applyTheme = React.useCallback((theme?: ITheme) => {
    let resolved = theme;

    if (!resolved) return;

    // If theme is system, resolve it before setting theme
    if (theme === "system") {
      resolved = getSystemTheme();
    }

    const d = document.documentElement;

    const handleAttribute = () => {
      d.classList.remove(...Object.values(classes));

      if (resolved) d.classList.add(classes[resolved as SystemTheme]);
    };

    handleAttribute();

    const colorScheme = colorSchemes.some(
      (colorScheme) => colorScheme === resolved,
    )
      ? resolved
      : null;

    if (colorScheme) d.style.colorScheme = colorScheme;
  }, []);

  const setTheme = React.useCallback((value: ITheme) => {
    setThemeState(value);
    saveToLS(storageKey, value);
  }, []);

  const handleMediaQuery = React.useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemTheme(e);
      setResolvedTheme(resolved);

      if (theme === "system") {
        applyTheme("system");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme],
  );

  // Always listen to System preference
  React.useEffect(() => {
    const media = window.matchMedia(MEDIA);

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  // localStorage event handling
  React.useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
      if (!e.newValue || !isTheme(e.newValue)) {
        setTheme(defaultTheme);
      } else {
        setThemeState(e.newValue); // Direct state update to avoid loops
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTheme]);

  // Whenever theme changes, apply it
  React.useEffect(() => {
    applyTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const providerValue = React.useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme: theme === "system" ? resolvedTheme : theme,
      themes,
      systemTheme: resolvedTheme as SystemTheme | undefined,
    }),
    [theme, setTheme, resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      <ThemeScript
        {...{
          scriptProps,
        }}
      />

      {children}
    </ThemeContext.Provider>
  );
};

const ThemeScript = React.memo(
  ({ scriptProps }: Omit<ThemeProviderProps, "children">) => {
    const scriptArgs = JSON.stringify([
      storageKey,
      defaultTheme,
      classes,
    ]).slice(1, -1);

    return (
      <script
        {...scriptProps}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `(${script.toString()})(${scriptArgs})`,
        }}
      />
    );
  },
);

ThemeScript.displayName = "ThemeScript";

// Helpers
const getTheme = () => {
  if (isServer) return undefined;
  let theme;

  try {
    theme = localStorage.getItem(storageKey) || undefined;
  } catch (e) {
    // Unsupported
  }

  return theme !== undefined && isTheme(theme) ? theme : defaultTheme;
};

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
  if (!e) e = window.matchMedia(MEDIA);
  const isDark = e.matches;
  const systemTheme = isDark ? "dark" : "light";

  return systemTheme;
};

const isTheme = (value: string): value is ITheme =>
  themes.some((theme) => theme === value);

const isSystemTheme = (value: string): value is SystemTheme =>
  systemThemes.some((theme) => theme === value);

// Credits: https://github.com/pacocoursey/next-themes/blob/main/next-themes/src/script.ts
const script = () => {
  const el = document.documentElement;

  function updateDOM(theme: SystemTheme) {
    el.classList.remove(...Object.values(classes));
    el.classList.add(classes[theme]);

    setColorScheme(theme);
  }

  function setColorScheme(theme: string) {
    if (systemThemes.some((systemTheme) => systemTheme === theme)) {
      el.style.colorScheme = theme;
    }
  }

  try {
    const themeName = localStorage.getItem(storageKey) || defaultTheme;
    const isSystem = themeName === "system";
    const theme =
      isSystem || !isSystemTheme(themeName) ? getSystemTheme() : themeName;
    updateDOM(theme);
  } catch (e) {
    //
  }
};
