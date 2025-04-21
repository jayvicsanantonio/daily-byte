import {
  describe,
  it,
  vi,
  expect,
  afterEach,
  beforeEach,
} from 'vitest';
import setCancellableInterval from './cancellable-interval';

describe('setCancellableInterval', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should execute callback at given interval', () => {
    const callback = vi.fn();
    setCancellableInterval(callback, 1);

    vi.advanceTimersByTime(35);
    expect(callback).toHaveBeenCalledTimes(35);
  });

  it('should stop executing when cancel function is called', () => {
    const callback = vi.fn();
    const cancel = setCancellableInterval(callback, 1);

    vi.advanceTimersByTime(2);
    expect(callback).toHaveBeenCalledTimes(2);

    cancel();
    vi.advanceTimersByTime(2);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should handle zero delay', () => {
    const callback = vi.fn();
    const cancel = setCancellableInterval(callback, 0);

    vi.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalledTimes(1);

    cancel();
  });

  it('should pass arguments to callback', () => {
    const callback = vi.fn();
    setCancellableInterval(callback, 1, 'arg1', 42);

    vi.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledWith('arg1', 42);
  });
});
