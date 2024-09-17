export default function minBy<T>(
  array: Array<T>,
  iteratee: (value: T) => any
): any {
  let result: any, computed: any;

  for (let value of array) {
    const current: any = iteratee(value);

    if (
      current !== null &&
      current !== undefined &&
      (computed === undefined || (computed !== null && current < computed))
    ) {
      result = value;
      computed = current;
    }
  }

  return result;
}
