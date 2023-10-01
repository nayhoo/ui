/**
 * Returns true if `item` is null or undefined.
 */
export const isNil = (item: unknown): item is null | undefined => {
  if (item === null || item === undefined) {
    return true;
  }

  return false;
};
