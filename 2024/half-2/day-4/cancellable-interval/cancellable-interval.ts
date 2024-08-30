export default function setCancellableInterval(
  callback: Function,
  delay: number = 0,
  ...args: Array<any>
) {
  let intervalId = setInterval(callback, delay, ...args);

  return function cancel() {
    clearInterval(intervalId);
  };
}
