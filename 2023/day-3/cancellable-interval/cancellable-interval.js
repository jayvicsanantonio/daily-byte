function setCancellableInterval(callback, delay, ...args) {
  const intervalId = setInterval(() => {
    callback(...args);
  }, delay);

  return function () {
    clearInterval(intervalId);
  };
}

export default setCancellableInterval;
