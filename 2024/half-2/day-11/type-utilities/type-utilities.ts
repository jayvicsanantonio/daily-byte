export function isBoolean<T>(value: T): boolean {
  return typeof value === "boolean";
}

export function isNumber<T>(value: T): boolean {
  return typeof value === "number";
}

export function isNull<T>(value: T): boolean {
  return value === null;
}

export function isString<T>(value: T): boolean {
  return typeof value === "string";
}

export function isSymbol<T>(value: T): boolean {
  return typeof value === "symbol";
}

export function isUndefined<T>(value: T): boolean {
  return typeof value === "undefined";
}
