export default function fill(array, value, start = 0, end = array.length) {
  const length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : start + length;
  }

  if (end > length) {
    end = length;
  }

  if (end < 0) {
    end = end + length;
  }

  for (let i = start; i < Math.min(end, length); i++) {
    array[i] = value;
  }

  return array;
}