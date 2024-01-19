Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;

  if (this.length === 0 && noInitialValue) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let value = initialValue ?? this[0];
  let index = noInitialValue ? 1 : 0;

  for (let i = index; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      value = callbackFn(value, this[i], i, this);
    }
  }

  return value;
};
