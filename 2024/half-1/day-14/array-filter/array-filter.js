Array.prototype.myFilter = function (callbackFn, thisArg) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, element, i, this)) {
      result.push(element);
    }
  }

  return result;
};
