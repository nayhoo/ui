import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";

dayjs.extend(objectSupport);

/**
 * Parses an input string to generate a date range object.
 * @param {string} input - The input string representing the date range. The format can be "YYYY", "YYYY-MM", or "YYYY-MM-DD".
 * @returns {{ start: dayjs.Dayjs; end: dayjs.Dayjs }} An object containing the start and end dates of the parsed range.
 * @throws {Error} If the input string format is invalid.
 */
export function getDateRange(input: string): {
  start: dayjs.Dayjs;
  end: dayjs.Dayjs;
} {
  // Parse the input string
  const parts = input.split("-");
  const year = parseInt(parts[0]);
  const month = parts.length > 1 ? parseInt(parts[1]) - 1 : 0; // Month is 0-based index
  const day = parts.length > 2 ? parseInt(parts[2]) : 1; // Default day is 1 if not provided

  // Start of the year
  const startOfYear = dayjs({
    year,
    month: 0,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  // End of the year
  const endOfYear = dayjs({
    year,
    month: 11,
    day: 31,
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999,
  });

  // Start of the month
  const startOfMonth = dayjs({
    year,
    month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  // End of the month
  const endOfMonth = dayjs({
    year,
    month: month + 1,
    day: 0,
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999,
  });

  // Start of the day
  const startOfDay = dayjs({
    year,
    month,
    day,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  // End of the day
  const endOfDay = dayjs({
    year,
    month,
    day,
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999,
  });

  // Determine which range to return based on input format
  if (parts.length === 1) {
    // Only year provided
    return { start: startOfYear, end: endOfYear };
  } else if (parts.length === 2) {
    // Year and month provided
    return { start: startOfMonth, end: endOfMonth };
  } else if (parts.length === 3) {
    // Year, month, and day provided
    return { start: startOfDay, end: endOfDay };
  } else {
    // Invalid input format
    throw new Error("Invalid input format");
  }
}
