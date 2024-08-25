Array.prototype.myMap = function (callbackFn, thisArg) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      const value = callbackFn.call(thisArg, this[i], i, this);

      result[i] = value;
    }
  }

  return result;
};
