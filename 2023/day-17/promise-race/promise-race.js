export default function promiseRace(promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach(async (promise, index) => {
      try {
        const value = await promise;
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  });
}
