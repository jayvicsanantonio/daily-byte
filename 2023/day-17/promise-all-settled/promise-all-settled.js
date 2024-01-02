export default function promiseAllSettled(promiseArray) {
  return new Promise((resolve, reject) => {
    const values = new Array(promiseArray.length);
    let pending = promiseArray.length;

    if (pending === 0) {
      resolve(values);
      return;
    }

    promiseArray.forEach(async (promise, index) => {
      try {
        const value = await promise;
        values[index] = { status: "fulfilled", value };
      } catch (error) {
        values[index] = { status: "rejected", reason: error };
      } finally {
        pending--;

        if (pending === 0) {
          resolve(values);
        }
      }
    });
  });
}
