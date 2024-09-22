export default function promiseReject<T>(reason: any): Promise<T> {
  return new Promise(function (resolve, reject) {
    return reject(reason);
  });
}
