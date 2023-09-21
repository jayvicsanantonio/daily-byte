export default function promiseAll(promiseArray) {
  return new Promise((resolve, reject) => {
    if (promiseArray.length === 0) {
      resolve([]);
      return;
    }

    const values = new Array(promiseArray.length);
    const pending = promiseArray.length;

    promiseArray.forEach(async (promise, index) => {
      try {
        const value = await promise;
        values[index] = value;
        pending--;
      } catch (error) {
        reject(error);
      } finally {
        if (pending === 0) {
          resolve(values);
        }
      }
    });
  });
}
