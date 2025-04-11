interface Array<T> {
  square(): Array<number>;
}

Array.prototype.square = function (): Array<number> {
  return this.map((element: number) => element ** 2);
};
