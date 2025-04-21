interface IntervalCallback {
  (...args: Array<any>): void;
}

export default function cancellableInterval(
  callback: IntervalCallback,
  delay: number,
  ...args: Array<any>
): () => void {
  const effectiveDelay = Math.max(delay ?? 0, 1);
  const intervalId = setInterval(callback, effectiveDelay, ...args);

  return function (): void {
    clearInterval(intervalId);
  };
}
