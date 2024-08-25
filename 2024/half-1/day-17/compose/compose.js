export default function compose(...fns) {
  return (arg) => {
    return fns.reduceRight((accumulator, fn) => {
      return fn(accumulator);
    }, arg);
  };
}
