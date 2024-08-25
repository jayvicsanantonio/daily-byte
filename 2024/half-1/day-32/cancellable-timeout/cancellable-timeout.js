export default function setCancellableTimeout(callback, delay, ...args) {
  const timeoutId = setTimeout(() => {
    callback(...args);
  }, delay);
  return () => {
    clearTimeout(timeoutId);
  };
}
