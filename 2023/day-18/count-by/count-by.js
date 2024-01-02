export default function countBy(array, iteratee) {
  const obj = {};

  for (let value of array) {
    const newValue =
      typeof iteratee === "function" ? iteratee(value) : value[iteratee];

    if (Object.hasOwn(obj, newValue)) {
      obj[newValue]++;
    } else {
      obj[newValue] = 1;
    }
  }

  return obj;
}
