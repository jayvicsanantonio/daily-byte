export default function makeCounter(initialValue = 0) {
  let counter = initialValue;

  return () => counter++;
}
