"use client";

import { ThemeProvider } from "@nayhoo/ui/theme-provider";
import { ToastProvider } from "@nayhoo/ui/toast-provider";
import React from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};
