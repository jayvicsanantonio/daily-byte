Array.prototype.square = function (): Array<number> {
  return this.map((x) => x * x);
};
