function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const smaller = [];
  const equal = [];
  const higher = [];

  for (let value of arr) {
    if (value < pivot) {
      smaller.push(value);
    } else if (value === pivot) {
      equal.push(value);
    } else {
      higher.push(value);
    }
  }

  return [...quickSort(smaller), ...equal, ...quickSort(higher)];
}

export default quickSort;
