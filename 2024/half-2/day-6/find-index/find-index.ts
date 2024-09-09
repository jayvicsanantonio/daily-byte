export default function findIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex: number = 0
): number {
  const length = array.length;
  let start = fromIndex;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  for (let i = start; i < array.length; i++) {
    const value = array[i];

    if (predicate(value, i, array)) {
      return i;
    }
  }

  return -1;
}
