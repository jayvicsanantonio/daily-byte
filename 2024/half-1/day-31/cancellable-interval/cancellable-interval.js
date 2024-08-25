export default function setCancellableInterval(callback, delay, ...args) {
  const intervalId = setInterval(() => {
    callback(...args);
  }, delay);

  return () => {
    clearInterval(intervalId);
  };
}
