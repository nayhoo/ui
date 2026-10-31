export type Theme = "light" | "dark" | "system";

export type SystemTheme = Exclude<Theme, "system">;
