export default function setCancellableTimeout<TArgs extends Array<any>>(
  callback: (...args: TArgs) => void,
  delay?: number,
  ...args: TArgs
) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined = setTimeout(
    callback,
    delay,
    ...args
  );
  let cancelled = false;

  return function cancel() {
    if (cancelled) return;
    clearTimeout(timeoutId);
    cancelled = true;
    timeoutId = undefined;
  };
}
