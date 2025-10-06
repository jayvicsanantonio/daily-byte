export default function chunk<T>(
  array: Array<T>,
  size: number = 1,
): Array<Array<T>> {
  if (size < 1) {
    throw new Error("Chunk size mus be >= 1");
  }

  const chunks: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}
