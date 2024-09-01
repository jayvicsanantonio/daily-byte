export default function cancellableTimeout(
  callback: () => void,
  delay: number = 0,
  ...args: Array<any>
) {
  const timeoutId = setTimeout(callback, delay, ...args);

  return function cancel() {
    clearTimeout(timeoutId);
  };
}
