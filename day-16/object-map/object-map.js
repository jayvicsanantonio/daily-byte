export default function objectMap(obj, fn) {
  const result = {};

  for (const [parentKey, parentValue] of Object.entries(obj)) {
    if (typeof parentValue === "object" && parentValue !== null) {
      for (const [childKey, childValue] of Object.entries(
        objectMap(parentValue, fn)
      )) {
        result[parentKey + "." + childKey] = childValue;
      }
    } else {
      result[parentKey] = fn.call(obj, parentValue);
    }
  }

  return result;
}
