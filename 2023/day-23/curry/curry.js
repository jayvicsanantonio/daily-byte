export default function curry(fn) {
  return function curried(...args) {
    const context = this;

    if (fn.length === args.length) {
      return fn.apply(context, args);
    }

    return function (arg) {
      return arg === undefined
        ? curried.apply(context, args)
        : curried.apply(context, [...args, arg]);
    };
  };
}
