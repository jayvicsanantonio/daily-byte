interface Array<T> {
  myMap<U>(
    callbackFn: (value: T, index: number, array: Array<T>) => U,
    thisArg?: any
  ): Array<U>;
}

Array.prototype.myMap = function (callbackFn, thisArg) {
  const results: Array<any> = [];

  for (let i = 0; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      results[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }

  return results;
};
