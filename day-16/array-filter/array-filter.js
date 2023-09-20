Array.prototype.myFilter = function (fn, thisArg) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const value = this[i];

    if (Object.hasOwn(this, i) && fn.call(thisArg, value, i, this)) {
      result.push(value);
    }
  }

  return result;
};
