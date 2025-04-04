export default function makeCounter(initialValue: number): Function {
  let counter = initialValue ?? 0;

  return function () {
    return counter++;
  };
}
