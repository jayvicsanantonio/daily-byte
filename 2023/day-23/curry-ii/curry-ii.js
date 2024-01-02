export default function curry(fn) {
  return function curried(...args) {
    const context = this;

    if (fn.length === args.length) {
      return fn.apply(context, args);
    }

    return function (...otherArgs) {
      return curried.apply(context, [...args, ...otherArgs]);
    };
  };
}
