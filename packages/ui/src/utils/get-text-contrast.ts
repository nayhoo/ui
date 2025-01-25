import { hexToRgb } from "@/utils/hex-to-rgb";

/**
 * Determines the text contrast color (black or white) for the given hex color.
 */
export const getTextContrast = (hex: string): string => {
  const rgb = hexToRgb(hex);

  if (!rgb) {
    throw new Error("Invalid color format");
  }

  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

  return luminance > 0.5 ? "#000000" : "#ffffff";
};
