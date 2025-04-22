export default function dropWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean
): Array<T> {
  let i = 0;
  let value = array[i];

  while (i < array.length && predicate(value, i, array)) {
    i++;
    value = array[i];
  }

  return array.slice(i);
}
