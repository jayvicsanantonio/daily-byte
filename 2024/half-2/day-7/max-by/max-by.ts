export default function maxBy<T, U>(
  array: Array<T>,
  iteratee: (value: T) => U
): T | undefined {
  let result: T | undefined;
  let computed: U | undefined;

  for (const value of array) {
    const current = iteratee(value);

    if (
      current !== null &&
      current !== undefined &&
      (computed === undefined || (computed !== null && current > computed))
    ) {
      computed = current;
      result = value;
    }
  }

  return result;
}
