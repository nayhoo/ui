"use client";

import { ThemeProvider, ToastProvider } from "@nayhoo/ui/providers";
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
