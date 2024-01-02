export default function intersection(...arrays) {
  const set = new Set(arrays[0]);

  for (let i = 1; i < arrays.length; i++) {
    const currentArray = arrays[i];

    for (let value of set) {
      if (!currentArray.includes(value)) {
        set.delete(value);
      }
    }
  }

  return [...set];
}
