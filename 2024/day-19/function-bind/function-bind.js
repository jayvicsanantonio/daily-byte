Function.prototype.myBind = function (thisArg, ...argArray) {
  return (...newArgArray) => {
    return this.call(thisArg, ...argArray, ...newArgArray);
  };
};
