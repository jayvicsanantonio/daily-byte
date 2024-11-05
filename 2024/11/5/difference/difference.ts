export default function difference<T>(
  array: Array<T>,
  values: Array<T>
): Array<T> {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new Error("Invalid inputs");
  }

  const result = [];
  const valuesSet = new Set(values);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
      result.push(value);
    }
  }

  return result;
}
