function getType(value) {
  if (Array.isArray(value)) {
    return "array";
  }

  const prototype = Object.getPrototypeOf(value);

  if (prototype === null || prototype.prototype === Object.prototype) {
    return "object";
  }

  if (value instanceof Map) {
    return "map";
  }

  if (value instanceof Set) {
    return "set";
  }

  return typeof value;
}

export default function promiseMerge(promise1, promise2) {
  return new Promise(async (resolve, reject) => {
    try {
      const value1 = await promise1;
      const value2 = await promise2;

      const type1 = getType(value1);
      const type2 = getType(value2);

      if (type1 !== type2) {
        reject("Unsupported data types");
        return;
      }

      console.log(type1);
      switch (type1) {
        case "number":
          resolve(value1 + value2);
          break;
        case "string":
          resolve(value1 + value2);
          break;
        case "array":
          resolve(value1.concat(value2));
          break;
        case "object":
          resolve({ ...value1, ...value2 });
          break;
        default:
          reject("Unsupported data types");
          break;
      }
    } catch (error) {
      reject(error);
    }
  });
}
