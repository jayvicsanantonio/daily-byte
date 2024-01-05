export default function findIndex(
  array,
  predicate,
  fromIndex = array.length - 1
) {
  const length = array.length;
  const startIndex =
    fromIndex < 0
      ? Math.max(array.length + fromIndex, 0)
      : Math.min(fromIndex, array.length - 1);

  for (let i = startIndex; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}
