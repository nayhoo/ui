"use client";

import { Box } from "@nayhoo/ui/box";
import { ThemeProvider } from "@nayhoo/ui/providers/theme-provider";
import "@nayhoo/ui/style.css";
import { theme } from "@nayhoo/ui/theme";
import * as React from "react";
import { DarkMode } from "react-cosmos-dark-mode/DarkMode";

export default function GlobalDecorator(props: { children: React.ReactNode }) {
  return (
    <DarkMode>
      <ThemeProvider>
        <Box style={{ margin: theme.space[4] }}>{props.children}</Box>
      </ThemeProvider>
    </DarkMode>
  );
}
