export default function intersection(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  const set = new Set(arrays[0]);

  for (let i = 1; i < arrays.length; i++) {
    for (let value of set) {
      if (!arrays[i].includes(value)) {
        set.delete(value);
      }
    }
  }

  return [...set];
}
