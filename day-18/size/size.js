export default function size(collection) {
  if (collection === null || collection === undefined) {
    return 0;
  }

  // Array
  if (Array.isArray(collection)) {
    return collection.length;
  }

  // Object
  const prototype = Object.getPrototypeOf(collection);
  if (prototype === null || prototype === Object.prototype) {
    return Object.keys(collection).length;
  }

  // String
  if (typeof collection === "string") {
    return collection.length;
  }

  // Map/Set
  if (collection instanceof Map || collection instanceof Set) {
    return collection.size;
  }

  return 0;
}
