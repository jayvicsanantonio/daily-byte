export default function groupBy(array, iteratee) {
  const result = {};
  const iterateeFn =
    typeof iteratee === "function" ? iteratee : (value) => value[iteratee];

  for (let value of array) {
    const newValue = iterateeFn(value);

    if (!Object.hasOwn(result, newValue)) {
      result[newValue] = [];
    }

    result[newValue].push(value);
  }

  return result;
}
