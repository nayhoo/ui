import { theme } from "@/theme/themes/theme-contract.css";
import { globalStyle } from "@vanilla-extract/css";

/**
 * this is reset css for universal elements
 */
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("*:focus-visible", {
  outlineColor: theme.color.border.focused,
  outlineStyle: theme.border.style.focused,
  outlineWidth: theme.border.width.focused,
  outlineOffset: "2px",
});

globalStyle("html, body", {
  color: theme.color.text.default,
  background: theme.color.background.surface.default,
});
