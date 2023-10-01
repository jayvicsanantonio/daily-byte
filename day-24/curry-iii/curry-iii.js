export default function curry(func) {
  return function curried(...args) {
    const fn = curried.bind(this, ...args);

    fn[Symbol.toPrimitive] = () => func.apply(this, args);

    return fn;
  };
}
