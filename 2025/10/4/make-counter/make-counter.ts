export default function makeCounter(initialValue: number = 0): () => number {
  let counter = initialValue;

  return () => {
    return counter++;
  };
}
