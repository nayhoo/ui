/**
 * Converts a hex color to RGB.
 */
export const hexToRgb = (
  hex: string,
): { r: number; g: number; b: number } | null => {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

  if (!match) {
    return null;
  }

  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16),
  };
};
