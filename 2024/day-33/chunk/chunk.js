export default function chunk(array, size = 1) {
  const result = [];
  let chunk = [];
  let index = 0;

  for (let element of array) {
    chunk.push(element);

    if (chunk.length === size || index === array.length - 1) {
      result.push(chunk);
      chunk = [];
    }

    index++;
  }

  return result;
}
