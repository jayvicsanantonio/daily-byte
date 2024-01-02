function countOccurrences(arr, key) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  return map.get(key) ?? 0;
}

countOccurrences([2, 4, 6, 8, 4], 4);
countOccurrences([1, 3, 5, 7, 9], 2);
countOccurrences([1, 2, 2, 2, 3], 2);
