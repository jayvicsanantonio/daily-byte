export default function curry(fn) {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn.apply(this, args);
    }

    return (...otherArgs) => curried.apply(this, [...args, ...otherArgs]);
  };
}
