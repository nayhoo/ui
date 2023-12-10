/**
 * Transforms a string into kebab case.
 * Kebab case is a style where words are separated by hyphens.
 * @param input - The string to transform.
 * @returns {string} - The kebab-cased string.
 */
export const toKebabCase = (input: string): string =>
  input
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camelCase to kebab-case
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .toLowerCase(); // Convert to lowercase
