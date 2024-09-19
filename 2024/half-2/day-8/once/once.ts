export default function once<T>(func: (this: any, args: Array<any>) => T) {
  let value: T;
  let called: boolean = false;
  return function (...args) {
    if (!called) {
      value = func.apply(this, args);
      called = true;
    }

    return value;
  };
}
