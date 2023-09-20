Array.prototype.myAt = function (index) {
  if (index < 0) {
    index = index + this.length;
  }

  return this[index];
};
