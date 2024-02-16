export default function findIndex(array, predicate, fromIndex = 0) {
  const length = array.length;

  if (fromIndex < 0) {
    fromIndex = -fromIndex > length ? 0 : fromIndex + length;
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}
