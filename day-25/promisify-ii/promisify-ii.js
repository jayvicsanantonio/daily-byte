const promisifyCustomSymbol = Symbol.for("util.promisify.custom");

export default function promisify(fn) {
  if (fn[promisifyCustomSymbol]) {
    return fn[promisifyCustomSymbol];
  }

  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (error, result) =>
        error ? reject(error) : resolve(result)
      );
    });
  };
}
