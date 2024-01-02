Function.prototype.myCall = function (context, ...args) {
  return this.apply(context, args);
};
