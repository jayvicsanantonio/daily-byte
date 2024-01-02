function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const lower = [];
  const equal = [];
  const higher = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < pivot) {
      lower.push(arr[index]);
    } else if (arr[index] === pivot) {
      equal.push(arr[index]);
    } else {
      higher.push(arr[index]);
    }
  }

  return [...quickSort(lower), ...equal, ...quickSort(higher)];
}

quickSort([5, 2, 8, 3, 1, 6]);
quickSort([9, 4, 7, 2, 1]);
quickSort([3, 1, 2, 5, 4]);
