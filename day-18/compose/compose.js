export default function compose(...fns) {
  return function (result) {
    for (let i = fns.length - 1; i >= 0; i--) {
      const fn = fns[i];

      result = fn(result);
    }

    return result;
  };
}
