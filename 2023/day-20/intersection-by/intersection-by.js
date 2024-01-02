export default function intersectionBy(iteratee, ...arrays) {
  const mappedArrays = arrays.map((array) => {
    return array.map(iteratee);
  });

  const intersectedValues = mappedArrays[0].filter((value) => {
    return mappedArrays.every((mappedArray) => mappedArray.includes(value));
  });

  return intersectedValues.map((value) => {
    const index = mappedArrays[0].indexOf(value);

    return arrays[0][index];
  });
}
