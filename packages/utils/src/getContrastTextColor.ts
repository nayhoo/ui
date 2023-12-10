import { calculateLuminance } from "./calculateLuminance";
import { hexToRgb } from "./hexToRgb";

/**
 * Calculate the contrast text color based on the background color.
 * @param bgColor - The background color in hex format (e.g., "#RRGGBB" or "#RRGGBBAA").
 * @returns The contrast text color in hex format.
 */
export const getContrastTextColor = (bgColor: string): string => {
  // Determine whether to use black or white as the text color
  const [r, g, b] = hexToRgb(bgColor);
  const luminance = calculateLuminance(r, g, b);
  const textColor = luminance > 0.5 ? "#000000" : "#FFFFFF";

  return textColor;
};
