export default function curry(fn) {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn.apply(this, args);
    }

    return (arg) =>
      arg === undefined
        ? curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
  };
}
