function containsDuplicate(arr) {
  const set = new Set();

  for (let element of arr) {
    if (set.has(element)) {
      return true;
    }

    set.add(element);
  }

  return false;
}

containsDuplicate([1, 2, 3, 4]);
containsDuplicate([1, 2, 3, 1]);
