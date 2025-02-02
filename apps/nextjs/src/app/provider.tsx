"use client";

import { ThemeProvider } from "@nayhoo/ui";
import React from "react";

type AppProviderProps = {
  children: React.ReactNode;
  theme?: "light" | "dark";
};

export const AppProvider = ({ children, theme }: AppProviderProps) => {
  return <ThemeProvider mode={theme}>{children}</ThemeProvider>;
};
