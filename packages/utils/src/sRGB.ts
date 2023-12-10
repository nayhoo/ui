/**
 * Applies sRGB gamma correction to a color channel value.
 *
 * @param c - The color channel value (0 to 255).
 * @returns The gamma-corrected color channel value.
 */
export const sRGB = (c: number): number => {
  const channel = c / 255;

  return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
};
