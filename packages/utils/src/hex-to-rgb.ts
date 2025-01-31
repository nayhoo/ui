/**
 * Converts a hexadecimal color code to an RGB color representation.
 *
 * @param hex - The hexadecimal color code (e.g., "#RRGGBB" or "#RRGGBBAA").
 * @returns An array representing the RGB color with values in the range [0, 255].
 *
 * @example
 * const rgb = hexToRgb("#3498db"); // Returns [52, 152, 219] (RGB values for the color)
 * const rgb = hexToRgb("#ff0000"); // Returns [255, 0, 0] (RGB values for pure red)
 */
export const hexToRgb = (hex: string): [number, number, number] => {
  const bigint = parseInt(hex.slice(1), 16);

  const red = Math.floor(bigint / 65536) % 256;
  const green = Math.floor(bigint / 256) % 256;
  const blue = bigint % 256;

  return [red, green, blue];
};
