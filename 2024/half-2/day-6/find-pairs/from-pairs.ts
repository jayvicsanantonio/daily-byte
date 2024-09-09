export default function fromPairs<T>(
  pairs: Array<[string | number, T]>
): Record<string | number, T> {
  const result: Record<string, T> = {};

  pairs.forEach(([key, value]) => {
    result[key] = value;
  });

  return result;
}
