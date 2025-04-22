export default function chunk(
  array: any[],
  size: number = 1
): any[][] {
  if (size < 1 || !Array.isArray(array)) {
    return [];
  }

  const result: any[][] = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);

    result.push(chunk);
  }

  return result;
}
