export default function findIndex(array, predicate, fromIndex = 0) {
  let index = -1;
  let length = array.length;

  if (fromIndex < 0) {
    fromIndex = -fromIndex > length ? 0 : fromIndex + length;
  }

  for (let i = fromIndex; i < length; i++) {
    if (predicate(array[i], i, array)) {
      index = i;
      break;
    }
  }

  return index;
}
