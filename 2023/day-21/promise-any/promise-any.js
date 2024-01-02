export default function promiseAny(promiseArray) {
  return new Promise((resolve, reject) => {
    if (promiseArray.length === 0) {
      reject(new AggregateError([]));
      return;
    }

    const errors = new Array(promiseArray.length);
    let pending = promiseArray.length;

    promiseArray.forEach(async (promise, index) => {
      try {
        const value = await promise;

        resolve(value);
      } catch (error) {
        errors[index] = error;
        pending--;
      } finally {
        if (pending === 0) {
          reject(new AggregateError(errors));
        }
      }
    });
  });
}
