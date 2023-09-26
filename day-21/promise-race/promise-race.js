export default function promiseRace(promiseArray) {
  return new Promise((resolve, reject) => {
    return promiseArray.forEach(async (promise) => {
      try {
        const value = await promise;
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  });
}
