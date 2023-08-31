function findIndex(array, predicate, fromIndex = 0) {
  const length = array.length;

  if (fromIndex < 0) {
    fromIndex = -fromIndex > length ? 0 : fromIndex + length;
  }

  for (let i = fromIndex; i < length; i++) {
    if (predicate(array[i])) {
      return i;
    }
  }

  return -1;
}

export default findIndex;
