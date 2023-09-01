function promiseReject(reason) {
  return new Promise((resolve, reject) => reject(reason));
}

export default promiseReject;
