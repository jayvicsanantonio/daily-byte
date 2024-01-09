export default function objectMap(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(function ([key, value]) {
      return [key, fn.call(obj, value)];
    })
  );
}
