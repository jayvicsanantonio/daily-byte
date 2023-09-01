function selectionSort(arr) {
  for (let left = 0; left < arr.length; left++) {
    let minimumIndex = left;
    for (let right = left; right < arr.length; right++) {
      if (arr[right] < arr[minimumIndex]) {
        minimumIndex = right;
      }
    }

    [arr[left], arr[minimumIndex]] = [arr[minimumIndex], arr[left]];
  }

  return arr;
}

export default selectionSort;
