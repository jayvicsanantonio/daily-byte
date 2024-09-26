export default function uniqueArray<T extends ReadonlyArray<unknown>>(
  array: T
): Array<T[number]> {
  return [...new Set(array)];
}
