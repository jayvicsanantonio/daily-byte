Array.prototype.myReduce = function (fn, initialValue) {
  if (this.length === 0 && initialValue == undefined) {
    throw Error(`No initial value provided and array is empty`);
  }

  let accumulator = null;
  let index = 0;

  if (initialValue === undefined) {
    initialValue = this[index];
    index++;
  }

  accumulator = initialValue;

  for (let i = index; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      accumulator = fn(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};
