export default function promiseAllSettled(promiseArray) {
  return new Promise((resolve, reject) => {
    const result = new Array(promiseArray.length);
    let pending = promiseArray.length;

    if (promiseArray.length === 0) {
      resolve([]);
      return;
    }

    promiseArray.forEach(async (promise, index) => {
      try {
        const value = await promise;
        result[index] = { status: "fulfilled", value };
      } catch (error) {
        result[index] = { status: "rejected", reason: error };
      } finally {
        pending--;

        if (pending === 0) {
          resolve(result);
        }
      }
    });
  });
}
