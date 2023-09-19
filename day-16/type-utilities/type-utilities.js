export const isBoolean = function (value) {
  return typeof value === "boolean";
};

export const isNumber = function (value) {
  return typeof value === "number";
};

export const isNull = function (value) {
  return value === null;
};

export const isString = function (value) {
  return typeof value === "string";
};

export const isSymbol = function (value) {
  return typeof value === "symbol";
};

export const isUndefined = function (value) {
  return typeof value === "undefined";
};
