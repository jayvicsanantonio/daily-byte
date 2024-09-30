interface Array<T> {
  myReduce<U>(
    callbackFn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue?: U
  ): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw new Error("Array must have at least one element");
  }

  let result = initialValue ?? this[0];
  let index = initialValue === undefined ? 1 : 0;

  for (let i = index; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      result = callbackFn(result, this[i], i, this);
    }
  }

  return result;
};
