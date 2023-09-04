function binarySearch(array, key) {
  return binarySearchHelper(array, key, 0, array.length - 1);
}

function binarySearchHelper(array, key, low, high) {
  if (low > high) {
    return false;
  }

  const mid = Math.floor((low + high) / 2);

  if (array[mid] === key) {
    return true;
  } else if (array[mid] < key) {
    return binarySearchHelper(array, key, mid + 1, high);
  } else {
    return binarySearchHelper(array, key, low, mid - 1);
  }
}

binarySearch([1, 2, 3, 4, 5], 4);
binarySearch([2, 4, 6, 8, 10], 5);
binarySearch([3, 6, 9, 12, 15], 15);
