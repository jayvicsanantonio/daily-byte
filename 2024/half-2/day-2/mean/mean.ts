export default function mean(array: number[]): number {
  if (array.length === 0) {
    return NaN;
  }

  const total = array.reduce((accumulator, value) => accumulator + value);

  return total / array.length;
}
