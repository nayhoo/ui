"use client";

import { Box } from "@nayhoo/ui/box";
import { ThemeProvider } from "@nayhoo/ui/providers/theme-provider";
import { ToastProvider } from "@nayhoo/ui/providers/toast-provider";
import "@nayhoo/ui/style.css";
import { theme } from "@nayhoo/ui/theme";
import * as React from "react";
import { DarkMode } from "react-cosmos-dark-mode/DarkMode";

export default function GlobalDecorator(props: { children: React.ReactNode }) {
  return (
    <DarkMode>
      <ThemeProvider>
        <ToastProvider>
          <Box
            align="start"
            display="flex"
            gap="4"
            direction="column"
            style={{ margin: theme.space[2] }}
          >
            {props.children}
          </Box>
        </ToastProvider>
      </ThemeProvider>
    </DarkMode>
  );
}
