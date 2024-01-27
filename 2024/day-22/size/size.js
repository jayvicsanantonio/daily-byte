export default function size(collection) {
  if (collection === null || collection === undefined) {
    return 0;
  }

  if (Array.isArray(collection) || typeof collection === "string") {
    return collection.length;
  }

  if (collection instanceof Map || collection instanceof Set) {
    return collection.size;
  }

  if (typeof collection === "object") {
    return Object.keys(collection).length;
  }

  return 0;
}
