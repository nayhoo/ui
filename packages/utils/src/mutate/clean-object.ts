/**
 * Removes null and undefined values from an object.
 * @param obj - The object to clean.
 * @returns A new object without null and undefined values.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cleanObject = <T extends Record<string, any>>(obj: T): T => {
  const cleanedObj = {} as T;

  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value !== null && value !== undefined) {
        cleanedObj[key] = value;
      }
    }
  }

  return cleanedObj;
};
