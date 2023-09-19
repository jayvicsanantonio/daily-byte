export default function get(object, path, defaultValue) {
  const paths = Array.isArray(path) ? path : path.split(".");

  let index = 0;
  let length = paths.length;

  while (index < length && object != null) {
    const key = paths[index];
    object = object[key];
    index++;
  }

  const value = index && index === length ? object : undefined;

  return value !== undefined ? object : defaultValue;
}
