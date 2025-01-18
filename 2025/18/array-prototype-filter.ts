Array.prototype.myFilter = function (callback: (value: any, index: number, array: any[]) => boolean) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}