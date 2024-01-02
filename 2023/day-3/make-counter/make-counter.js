export default function makeCounter(initialValue) {
  let count = initialValue ?? 0;

  return () => count++;
}
