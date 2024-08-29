export default function makeCounter(initialValue: number = 0): Function {
  let count = initialValue;
  return function (): number {
    return count++;
  };
}
