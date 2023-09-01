Function.prototype.myApply = function (context, args = []) {
  return this.call(context, ...args);
};
