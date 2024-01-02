export default function intersectionWith(comparator, ...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  const intersectedValues = arrays[0].filter((value) => {
    return arrays.slice(1).every((array) => {
      return array.some((otherValue) => comparator(value, otherValue));
    });
  });

  return intersectedValues;
}
