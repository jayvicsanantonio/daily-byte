Function.prototype.myCall = function (thisArg, ...argArray) {
  return this.bind(thisArg, ...argArray)();
};
