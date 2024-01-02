export default function curry(func) {
  return function curried(...args) {
    if (args.length === func.length) {
      return func.apply(this, args);
    }

    return (arg) => {
      return arg === undefined
        ? curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
    };
  };
}
