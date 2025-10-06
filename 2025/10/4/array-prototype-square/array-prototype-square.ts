interface Array<T> {
  square(): number[];
}

Array.prototype.square = function () {
  return this.map((num: number) => num * num);
};
