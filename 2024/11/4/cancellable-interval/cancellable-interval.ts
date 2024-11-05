export default function setCancellableInterval(
  callback: Function,
  delay?: number,
  ...args: Array<any>
): () => void {
  let intervalId = setInterval(callback, delay, ...args);
  return function cancel() {
    clearInterval(intervalId);
  };
}
