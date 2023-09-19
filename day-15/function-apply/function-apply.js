Function.prototype.myApply = function (thisArg, args = []) {
  return this.call(thisArg, ...args);
};
