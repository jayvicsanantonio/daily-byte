function inRange(value, start, end = 0) {
  const areAllNumbers = [value, start].every(
    (item) => typeof item === "number"
  );

  if (!areAllNumbers) {
    throw Error(`all arguments shoudl be of type 'number'`);
  }

  return value >= Math.min(start, end) && value < Math.max(start, end);
}

export default inRange;
