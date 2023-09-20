export default function promiseAll(promiseArray) {
  return new Promise((resolve, reject) => {
    const result = new Array(promiseArray.length);
    let unresolved = promiseArray.length;

    if (unresolved === 0) {
      resolve(result);
      return;
    }

    promiseArray.forEach(async (promise, index) => {
      try {
        const value = await promise;
        result[index] = value;
        unresolved--;
      } catch (error) {
        reject(error);
      } finally {
        if (unresolved === 0) {
          resolve(result);
        }
      }
    });
  });
}
