function difference(array, values) {
  const result = [];
  const valuesSet = new Set(values);

  for (let element of array) {
    if (!valuesSet.has(element) && element !== undefined) {
      result.push(element);
    }
  }

  return result;
}

export default difference;
