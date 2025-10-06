export default function mean(array: number[]): number {
  if (array.length === 0) {
    return NaN;
  }

  const sum = array.reduce((total, num) => total + num, 0);
  return sum / array.length;
}
