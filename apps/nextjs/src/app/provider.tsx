"use client";

import { ThemeProvider, Toaster } from "@nayhoo/ui/providers";
import React from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider>
      <Toaster>{children}</Toaster>
    </ThemeProvider>
  );
};
