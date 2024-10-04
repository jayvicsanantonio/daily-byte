interface Function {
  myBind(this: Function, thisArg: any, ...argArray: Array<any>): Function;
}

Function.prototype.myBind = function (
  thisArg: any,
  ...argArray: Array<any>
): Function {
  return (...newArgArray: Array<any>) => {
    return this.call(thisArg, ...argArray, ...newArgArray);
  };
};
