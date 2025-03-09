import { lightTheme } from "@nayhoo/ui/theme";
import React from "react";

function ThemeDecorator({ children }: { children: React.ReactNode }) {
  return <div className={lightTheme}>{children}</div>;
}

export default [ThemeDecorator];
