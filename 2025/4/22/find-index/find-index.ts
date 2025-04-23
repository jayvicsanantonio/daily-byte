export default function findIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex: number = 0
): number {
  const length = array.length;
  let startIndex =
    fromIndex >= 0 ? fromIndex : Math.max(fromIndex + length, 0);

  for (let i = startIndex; i < length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}
