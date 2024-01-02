function clamp(number, lower, upper) {
  const areAllNumbers = [...arguments].every(
    (item) => typeof item === "number"
  );

  if (!areAllNumbers) {
    throw Error(`All arguments should be of type 'number'`);
  }

  return Math.min(upper, Math.max(lower, number));
}

export default clamp;
