export default function get(object, path, defaultValue) {
  const paths = Array.isArray(path) ? path : path.split(".");

  let index = 0;
  let length = paths.length;

  while (object != null && index < length) {
    const key = paths[index];
    object = object[key];
    index++;
  }

  const value = index > 0 && index === length ? object : undefined;

  return value === undefined ? defaultValue : value;
}
