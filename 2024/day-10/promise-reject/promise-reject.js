export default function promiseReject(reason) {
  return new Promise((resolve, reject) => reject(reason));
}
