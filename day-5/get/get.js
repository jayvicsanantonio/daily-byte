function get(objParam, key, defaultValue) {
  if (typeof objParam !== "object" || objParam === null) {
    throw Error("First argument should be an object");
  }

  if (typeof key !== "string" && !Array.isArray(key)) {
    throw Error("Second argument should be a string");
  }

  // profile.name.firstName
  // ['profile', 'name', 'firstName']
  const paths = Array.isArray(key) ? key : key.split(".");
  let obj = objParam;
  let index = 0;

  while (obj != null && index < paths.length) {
    const currentPath = paths[index];
    obj = obj[currentPath];
    index++;
  }

  const value = index > 0 && index === paths.length ? obj : undefined;

  return value === undefined ? defaultValue : value;
}

export default get;
