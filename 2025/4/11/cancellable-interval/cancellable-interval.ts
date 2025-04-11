interface IntervalCallback {
  (...args: Array<any>): void;
}

export default function setCancellableInterval(
  callback: IntervalCallback,
  delay?: number,
  ...args: Array<any>
): () => void {
  // Enforce a minimum delay of 1ms for the actual setInterval
  // This can help avoid issues with fake timers when delay is 0.
  const effectiveDelay = Math.max(delay ?? 0, 1);
  const intervalId = setInterval(callback, effectiveDelay, ...args);

  return function (): void {
    clearInterval(intervalId);
  };
}
