export default function promiseAny(promiseArray) {
  return new Promise((resolve, reject) => {
    const errors = new Array(promiseArray.length);
    let pending = promiseArray.length;

    if (pending === 0) {
      reject(new AggregateError([]));
    }

    promiseArray.forEach(async (promise, index) => {
      try {
        const value = await promise;
        resolve(value);
      } catch (error) {
        errors[index] = error;
        pending--;

        if (pending === 0) {
          reject(new AggregateError(errors));
        }
      }
    });
  });
}
