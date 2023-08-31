function fill(array, value, start = 0, end = array.length) {
  const length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : start + length;
  }

  if (end < 0) {
    end += length;
  }

  for (let i = start; i < Math.min(end, length); i++) {
    array[i] = value;
  }

  return array;
}

export default fill;
