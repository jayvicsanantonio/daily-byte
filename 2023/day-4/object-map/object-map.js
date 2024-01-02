function objectMap(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn.call(obj, value)])
  );
}

export default objectMap;
