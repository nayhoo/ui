"use client";

import { lightTheme } from "@nayhoo/ui";
import React from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <div className={lightTheme}>{children}</div>;
};
