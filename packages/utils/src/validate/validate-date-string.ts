import dayjs from "dayjs";

/**
 * Validates a date string and returns a dayjs.Dayjs object.
 * @param {string} dateString - The date string to validate.
 * @returns {dayjs.Dayjs} The dayjs.Dayjs object representing the validated date.
 * @throws {Error} If the date string is invalid and cannot be parsed.
 */
export function validateDateString(dateString: string): dayjs.Dayjs {
  const date = dayjs(dateString);

  // Check if the parsed date is valid
  if (!date.isValid()) {
    throw new Error("Invalid date string");
  }

  return date;
}
