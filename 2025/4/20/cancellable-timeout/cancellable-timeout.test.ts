import { describe, it, vi, expect } from 'vitest';
import cancellableTimeout from './cancellable-timeout';

describe('cancellableTimeout', () => {
  it('should execute callback after delay', () => {
    vi.useFakeTimers();
    const callback = vi.fn();

    cancellableTimeout(callback, 1000);
    expect(callback).not.toBeCalled();

    vi.advanceTimersByTime(1000);
    expect(callback).toBeCalledTimes(1);

    vi.useRealTimers();
  });

  it('should pass arguments to callback', () => {
    vi.useFakeTimers();
    const callback = vi.fn();

    cancellableTimeout(callback, 1000, 'test', 123);
    vi.advanceTimersByTime(1000);

    expect(callback).toBeCalledWith('test', 123);
    vi.useRealTimers();
  });

  it('should cancel timeout when cancel function is called', () => {
    vi.useFakeTimers();
    const callback = vi.fn();

    const cancel = cancellableTimeout(callback, 1000);
    cancel();

    vi.advanceTimersByTime(1000);
    expect(callback).not.toBeCalled();

    vi.useRealTimers();
  });

  it('should work with zero delay', () => {
    vi.useFakeTimers();
    const callback = vi.fn();

    cancellableTimeout(callback, 0);
    vi.advanceTimersByTime(0);

    expect(callback).toBeCalled();
    vi.useRealTimers();
  });
});
