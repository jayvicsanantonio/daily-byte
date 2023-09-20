export default function uniqueArray(array) {
  const result = [];
  const seen = new Set();

  for (let value of array) {
    if (!seen.has(value)) {
      result.push(value);
      seen.add(value);
    }
  }

  return result;
}
