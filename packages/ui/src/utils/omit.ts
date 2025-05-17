export function omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  const ret = { ...obj };
  keys.forEach((key) => {
    delete ret[key];
  });

  return ret;
}
