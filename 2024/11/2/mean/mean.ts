export default function mean(array: Array<number>): number {
  if (array.length === 0) {
    return NaN;
  }

  let result: number = 0;
  let length: number = array.length;

  for (let i = 0; i < length; i++) {
    result += array[i];
  }

  return result / length;
}
