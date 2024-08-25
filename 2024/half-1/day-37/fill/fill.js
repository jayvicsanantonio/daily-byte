export default function fill(array, value, start = 0, end = array.length) {
  const length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  if (end > length) {
    end = length;
  }

  if (end < 0) {
    end = end + length;
  }

  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
}
