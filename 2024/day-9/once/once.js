export default function once(callback) {
  let ranOnce = false;
  let value = null;

  return function (...args) {
    if (!ranOnce) {
      value = callback.apply(this, args);
      ranOnce = true;
    }

    return value;
  };
}
