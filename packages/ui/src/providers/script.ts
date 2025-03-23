// Credit: https://github.com/pacocoursey/next-themes/blob/main/next-themes/src/script.ts

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const script = (storageKey, defaultTheme, classes) => {
  const el = document.documentElement;

  function updateDOM(theme) {
    el.classList.remove(...Object.values(classes));
    el.classList.add(classes[theme]);
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  try {
    const themeName = localStorage.getItem(storageKey) || defaultTheme;
    const isSystem = themeName === "system";
    const theme = isSystem ? getSystemTheme() : themeName;
    updateDOM(theme);
  } catch (e) {
    //
  }
};
