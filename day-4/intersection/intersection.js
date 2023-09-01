function intersection(...arrays) {
  const set = new Set(arrays[0]);

  for (let i = 1; i < arrays.length; i++) {
    set.forEach((item) => {
      if (!arrays[i].includes(item)) {
        set.delete(item);
      }
    });
  }

  return [...set];
}

export default intersection;
