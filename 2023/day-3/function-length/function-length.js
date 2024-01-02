function functionLength(fn) {
  if (typeof fn !== "function") {
    throw Error(`Argument should be of type "function"`);
  }

  return fn.length;
}

export default functionLength;
