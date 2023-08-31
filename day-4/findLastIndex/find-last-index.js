function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  const length = array.length;

  if (fromIndex < 0) {
    fromIndex += length;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (predicate(array[i])) {
      return i;
    }
  }

  return -1;
}

export default findLastIndex;
