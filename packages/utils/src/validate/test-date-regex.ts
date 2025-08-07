const dateRegex = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/;

/**
 * Tests if a given string matches the date format pattern.
 * The accepted format is YYYY-MM-DD, where YYYY is the year, MM is the month, and DD is the day.
 * @param {string} input - The string to test against the date format pattern.
 * @returns {boolean} Returns true if the input string matches the date format pattern, otherwise false.
 */
export const testDateRegex = (input: string): boolean => {
  return dateRegex.test(input);
};
