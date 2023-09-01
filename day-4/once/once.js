function once(fn) {
  let ranOnce = false;
  let result = null;

  return function (...args) {
    if (!ranOnce) {
      result = fn.apply(this, args);
      ranOnce = true;
    }

    return result;
  };
}

export default once;
