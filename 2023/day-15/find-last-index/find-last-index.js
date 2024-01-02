export default function findLastIndex(
  array,
  predicate,
  fromIndex = array.length - 1
) {
  let index = -1;
  let length = array.length;

  if (fromIndex > length) {
    fromIndex = length;
  }

  if (fromIndex < 0) {
    fromIndex = fromIndex + length;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      index = i;
      break;
    }
  }

  return index;
}
