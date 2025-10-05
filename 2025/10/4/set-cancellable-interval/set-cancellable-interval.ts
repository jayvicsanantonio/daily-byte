export default function setCancellableInterval(
  callback: Function,
  delay: number,
  ...args: Array<any>
): () => void {
  const intervalId = setInterval(callback, delay, ...args);

  return function cancel() {
    clearInterval(intervalId);
  };
}
