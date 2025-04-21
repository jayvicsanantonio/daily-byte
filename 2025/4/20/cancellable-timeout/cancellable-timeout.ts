interface TimeoutCallback {
  (...args: Array<any>): void;
}

export default function cancellableTimeout(
  callback: TimeoutCallback,
  delay?: number,
  ...args: Array<any>
): () => void {
  const timeoutId = setTimeout(callback, delay, ...args);

  return function (): void {
    return clearTimeout(timeoutId);
  };
}
