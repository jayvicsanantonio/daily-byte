export default function limit(callback, n) {
  let counter = 0;
  let result = null;

  return function (...args) {
    if (counter < n) {
      counter++;
      result = callback.apply(this, args);
    }

    return result;
  };
}
