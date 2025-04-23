export default function difference<T>(
  firstArray: Array<T>,
  secondArray: Array<T>
): Array<T> {
  const result = new Set();

  for (let i = 0; i < firstArray.length; i++) {
    const firstArrayValue = firstArray[i];

    if (i in firstArray && !secondArray.includes(firstArrayValue)) {
      result.add(firstArrayValue);
    }
  }

  return [...result] as Array<T>;
}
