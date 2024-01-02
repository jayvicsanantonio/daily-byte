function chunk(arr, size = 1) {
  if (!Array.isArray(arr)) {
    throw Error("first argument should be an array");
  }

  if (typeof size !== "number") {
    throw Error("second argument should be a number");
  }

  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);

    chunks.push(chunk);
  }

  return chunks;
}

export default chunk;
