export default function promiseTimeout(promise, duration) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject("Promise timeout");
    }, duration);

    promise
      .then((result) => resolve(result))
      .catch((error) => reject(error))
      .finally(() => clearTimeout(timeoutId));
  });
}
