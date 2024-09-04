export default function difference<T>(
  array: Array<T>,
  values: Array<T>
): Array<T> {
  if (values.length === 0) {
    return array;
  }

  return array.filter((currentValue) => {
    return !values.includes(currentValue);
  });
}
