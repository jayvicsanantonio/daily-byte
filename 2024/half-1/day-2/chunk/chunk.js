export default function chunk(array, size = 1) {
  const result = [];
  let chunk = [];

  array.forEach((element, index) => {
    if (index % size === 0) {
      chunk = [element];
      result.push(chunk);
    } else {
      chunk.push(element);
    }
  });

  return result;
}
