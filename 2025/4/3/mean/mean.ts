export default function mean(array: number[]): number {
  const length = array.length;

  if (length === 0) {
    return NaN;
  }

  const total = array.reduce((accumulator, value) => {
    return accumulator + value;
  });

  return total / length;
}
