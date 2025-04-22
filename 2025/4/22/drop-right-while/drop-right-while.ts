export default function dropRightWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean
): Array<T> {
  let i = array.length - 1;
  let value = array[i];

  while (predicate(value, i, array) && i >= 0) {
    i--;
    value = array[i];
  }

  return array.slice(0, i + 1);
}
