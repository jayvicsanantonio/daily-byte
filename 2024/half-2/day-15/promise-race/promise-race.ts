export default function promiseRace(
  iterable: Array<unknown>
): Promise<Awaited<unknown>> {
  return new Promise((resolve, reject) => {
    iterable.forEach(async (promise) => {
      try {
        const result = await promise;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  });
}
