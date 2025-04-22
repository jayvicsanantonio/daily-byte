export default function compact<T>(
  array: Array<T | null | undefined | false | 0 | ''>
): Array<T> {
  const result: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (value) {
      result.push(value);
    }
  }

  return result;
}
