export const isArray = function (value) {
  return Array.isArray(value);
};

export const isFunction = function (value) {
  return typeof value === "function";
};

export const isObject = function (value) {
  return isFunction(value) || (typeof value === "object" && value !== null);
};

export const isPlainObject = function (value) {
  if (value === null || value === undefined) {
    return false;
  }

  return (
    Object.getPrototypeOf(value) === Object.prototype ||
    Object.getPrototypeOf(value) === null
  );
};
