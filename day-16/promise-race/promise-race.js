export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    iterable.forEach(async (item) => {
      try {
        const value = await item;
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  });
}
