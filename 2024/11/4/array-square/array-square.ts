interface Array<T extends number> {
  square(): Array<T>;
}

Array.prototype.square = function () {
  return this.map((value) => {
    if (!Number.isFinite(value)) {
      throw new Error("Array square can only be called on finite numbers");
    }

    if (Math.abs(value) > Math.sqrt(Number.MAX_SAFE_INTEGER)) {
      throw new Error("Square operation exceeds maximum safe integer");
    }

    return value ** 2;
  });
};
