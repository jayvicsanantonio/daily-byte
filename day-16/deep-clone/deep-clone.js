export default function deepClone(inputValue) {
  if (typeof inputValue !== "object" || inputValue === null) {
    return inputValue;
  }

  if (Array.isArray(inputValue)) {
    return inputValue.map(deepClone);
  }

  return Object.fromEntries(
    Object.entries(inputValue).map(([key, value]) => {
      return [key, deepClone(value)];
    })
  );
}
