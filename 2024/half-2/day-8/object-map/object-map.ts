export default function objectMap<V, R>(
  obj: Record<string, V>,
  fn: (val: V) => R
): Record<string, R> {
  let result: Record<string, R> = {};

  for (let item in obj) {
    const value = obj[item];
    result[item] = fn.call(obj, value);
  }

  return result;
}
