interface Array<T> {
  myFilter(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: any
  ): Array<T>;
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const results = [];

  for (let i = 0; i < len; i++) {
    const value = this[i];
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, value, i, this)) {
      results.push(value);
    }
  }

  return results;
};
