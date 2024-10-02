export default function cycle<T>(...values: Array<T>): () => T {
  let index = -1;

  return function (): T {
    if (index < values.length - 1) {
      index++;
    } else {
      index = 0;
    }

    return values[index];
  };
}
