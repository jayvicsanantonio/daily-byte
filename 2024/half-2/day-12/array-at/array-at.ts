interface Array<T> {
  myAt(index: number): T | undefined;
}

Array.prototype.myAt = function (index: number) {
  const position = index < 0 ? this.length + index : index;

  return this[position];
};
