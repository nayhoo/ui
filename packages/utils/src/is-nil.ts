/**
 * Checks if a variable is null or undefined.
 * @param value - The variable to check.
 * @returns {boolean} - Returns true if the variable is null or undefined, otherwise returns false.
 */
export const isNil = (value: unknown): value is null | undefined =>
  value === null || value === undefined;
