Function.prototype.myCall = function (thisArg, ...args) {
  return this.bind(thisArg)(...args);
};
