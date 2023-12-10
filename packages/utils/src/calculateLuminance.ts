import { sRGB } from "./sRGB";

/**
 * Calculates the luminance of an RGB color using the sRGB gamma correction.
 *
 * Luminance is a measure of the brightness of a color, and it is used to determine
 * the contrast between the color and another color (e.g., text color on a background).
 *
 * @param r - The red component of the RGB color (0 to 255).
 * @param g - The green component of the RGB color (0 to 255).
 * @param b - The blue component of the RGB color (0 to 255).
 * @returns The luminance value of the color, ranging from 0 (dark) to 1 (bright).
 *
 * @example
 * const luminance = calculateLuminance(255, 255, 255); // Returns 1 (white color)
 * const luminance = calculateLuminance(0, 0, 0);       // Returns 0 (black color)
 * const luminance = calculateLuminance(255, 0, 0);     // Returns 0.2126 (pure red)
 */
export const calculateLuminance = (r: number, g: number, b: number): number => {
  const gammaCorrected = [sRGB(r), sRGB(g), sRGB(b)];

  return 0.2126 * gammaCorrected[0] + 0.7152 * gammaCorrected[1] + 0.0722 * gammaCorrected[2];
};
