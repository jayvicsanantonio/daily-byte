Function.prototype.myBind = function (thisArg, ...boundArgs) {
  return (...args) => this.call(thisArg, ...boundArgs, ...args);
};
