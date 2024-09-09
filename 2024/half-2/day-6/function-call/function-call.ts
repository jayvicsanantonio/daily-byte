interface Function {
  myCall(this: Function, thisArg: any, ...argArray: Array<any>): any;
}

Function.prototype.myCall = function (thisArg, ...argArray) {
  return this.bind(thisArg)(...argArray);
};
