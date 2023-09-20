Array.prototype.myMap = function (fn, thisArg) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      const value = fn.call(thisArg, this[i], i, this);
      result[i] = value;
    }
  }

  return result;
};
