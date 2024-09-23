export default function selectionSort(array: Array<number>): Array<number> {
  for (let i = 0; i < array.length - 1; i++) {
    let currentSmallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[currentSmallestIndex]) {
        currentSmallestIndex = j;
      }
    }

    let temp = array[i];
    array[i] = array[currentSmallestIndex];
    array[currentSmallestIndex] = temp;
  }

  return array;
}
