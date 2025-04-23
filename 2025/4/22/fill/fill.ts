export default function fill<T>(
  array: Array<T>,
  value: any,
  start: number = 0,
  end: number = array.length
): Array<T> {
  const length = array.length;

  if (length === 0) {
    return [];
  }

  if (start < 0) {
    start = -start > length ? 0 : start + length;
  }

  if (end > length) {
    end = length + 1;
  }

  if (end < 0) {
    end = end + length;
  }

  for (let i = start; i < Math.min(end, length); i++) {
    array[i] = value;
  }

  return array;
}
