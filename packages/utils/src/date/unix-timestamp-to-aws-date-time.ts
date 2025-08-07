import dayjs from "dayjs";

/**
 * Converts a Unix timestamp (in milliseconds) to AWS DateTime format.
 * AWS DateTime format is in the form of 'YYYY-MM-DDTHH:mm:ssZ' (UTC time).
 *
 * @param {number} unixTimestamp The Unix timestamp to convert.
 * @returns {string} The converted AWS DateTime string.
 */
export const unixTimestampToAWSDateTime = (unixTimestamp: number): string => {
  // Create a Date object from the provided Unix timestamp (in milliseconds)
  const date = dayjs(unixTimestamp);

  // Convert the Date object to an ISO 8601 string and slice it to remove milliseconds and time zone offset
  const awsDateTime = date.toISOString().slice(0, 19) + "Z";

  return awsDateTime;
};
