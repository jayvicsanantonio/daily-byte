export default function get<T>(
  objectParam: Record<string, any>,
  pathParam: string | Array<string>,
  defaultValue?: T
): T {
  const paths = Array.isArray(pathParam) ? pathParam : pathParam.split(".");
  let currentPath: string | undefined = paths.shift() ?? "";
  let result: Record<string, any>;
  result = objectParam[currentPath];

  while (paths.length && typeof result === "object" && result !== null) {
    currentPath = paths.shift();

    if (currentPath) {
      result = result[currentPath];
    }
  }

  if (paths.length) {
    return (defaultValue ?? undefined) as T;
  }

  return (result === undefined ? defaultValue : result) as T;
}
