import { omit } from "@/utils/omit";
import { pick } from "@/utils/pick";

/**
 * @example
 * const [variants, rest] = extractVariantsFromProps(
 *  props,
 *  ...boxRecipe.variants(),
 * );
 */
export function extractVariantsFromProps<T, K extends keyof T>(
  obj: T,
  ...keys: K[]
): [Pick<T, K>, Omit<T, K>] {
  const variants = pick(obj, ...keys);
  const rest = omit(obj, ...keys);

  return [variants, rest];
}
