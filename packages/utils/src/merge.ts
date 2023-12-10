type Mergeable = Record<string, any>;

/**
 * Deep merge two objects.
 *
 * @param target - The target object to merge into.
 * @param sources - The source objects to merge.
 * @returns The merged object.
 */
export const merge = (target: Mergeable, ...sources: Mergeable[]): Mergeable => {
  // Create a new object to avoid modifying the original target
  const merged = { ...target };

  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (
          typeof source[key] === "object" &&
          source[key] !== null &&
          !Array.isArray(source[key])
        ) {
          // Recursively merge nested objects
          merged[key] = merge(merged[key], source[key]);
        } else {
          // Non-object properties are assigned directly
          merged[key] = source[key];
        }
      }
    });
  });

  return merged;
};
