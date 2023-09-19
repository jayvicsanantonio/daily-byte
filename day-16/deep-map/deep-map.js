export default function deepMap(inputValue, fn) {
  if (Array.isArray(inputValue)) {
    return inputValue.map((item) => deepMap(item, fn));
  }

  if (
    (inputValue !== null && Object.getPrototypeOf(inputValue)) ===
    Object.prototype
  ) {
    return Object.fromEntries(
      Object.entries(inputValue).map(([key, value]) => {
        return [key, deepMap(value, fn.bind(inputValue))];
      })
    );
  }

  return fn(inputValue);
}
