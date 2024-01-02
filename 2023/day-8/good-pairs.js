function goodPairs(arr) {
  const map = new Map();
  let pairCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    map.set(num, (map.get(num) || 0) + 1);
    pairCount = pairCount + map.get(num) - 1;
  }

  return pairCount;
}

goodPairs([1, 2, 3, 1, 1, 3]);
goodPairs([1, 1, 1, 1]);
goodPairs([1, 2, 3]);
