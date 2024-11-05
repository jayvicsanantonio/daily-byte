export default function setCancellableTimeout(
  callback: Function,
  delay?: number,
  ...args: Array<any>
) {
  let timeoutId = setTimeout(callback, delay, ...args);

  return function cancel() {
    clearTimeout(timeoutId);
  };
}
