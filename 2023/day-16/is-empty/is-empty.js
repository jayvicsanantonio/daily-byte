export default function isEmpty(value) {
  if (value === null || value === undefined) {
    // value == null loose equality
    return true;
  }

  // Arrays/Strings/Buffers
  if (
    Array.isArray(value) ||
    typeof value === "string" ||
    Buffer.isBuffer(value)
  ) {
    return value.length === 0;
  }

  // Maps/Sets
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  // Objects
  const prototype = Object.getPrototypeOf(value);

  if (prototype === null || prototype === Object.prototype) {
    return Object.keys(value).length === 0;
  }

  return true;
}
