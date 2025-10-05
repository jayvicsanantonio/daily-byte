// Tests for setCancellableInterval utility
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import setCancellableInterval from "./set-cancellable-interval";

describe("setCancellableInterval", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("returns a function", () => {
    const cancel = setCancellableInterval(() => {}, 100);
    expect(typeof cancel).toBe("function");
  });

  test("calls callback at specified intervals", () => {
    const callback = vi.fn();
    setCancellableInterval(callback, 100);

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(2);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(3);
  });

  test("cancel function stops the interval", () => {
    const callback = vi.fn();
    const cancel = setCancellableInterval(callback, 100);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(2);

    cancel();

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(2);

    vi.advanceTimersByTime(200);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  test("passes arguments to callback", () => {
    const callback = vi.fn();
    setCancellableInterval(callback, 100, "arg1", "arg2", 123);

    vi.advanceTimersByTime(100);

    expect(callback).toHaveBeenCalledWith("arg1", "arg2", 123);
  });

  test("passes multiple arguments to callback on each interval", () => {
    const callback = vi.fn();
    setCancellableInterval(callback, 100, "hello", 42);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenNthCalledWith(1, "hello", 42);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenNthCalledWith(2, "hello", 42);
  });

  test("works with no additional arguments", () => {
    const callback = vi.fn();
    setCancellableInterval(callback, 100);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledWith();
  });

  test("can cancel immediately before first execution", () => {
    const callback = vi.fn();
    const cancel = setCancellableInterval(callback, 100);

    cancel();

    vi.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);
    expect(callback).not.toHaveBeenCalled();
  });

  test("multiple intervals are independent", () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    const cancel1 = setCancellableInterval(callback1, 100);
    setCancellableInterval(callback2, 100);

    vi.advanceTimersByTime(100);
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);

    cancel1();

    vi.advanceTimersByTime(100);
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(2);
  });

  test("works with different delays", () => {
    const callback = vi.fn();
    setCancellableInterval(callback, 250);

    vi.advanceTimersByTime(200);
    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(50);
    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(250);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  test("calling cancel multiple times is safe", () => {
    const callback = vi.fn();
    const cancel = setCancellableInterval(callback, 100);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);

    cancel();
    cancel();
    cancel();

    vi.advanceTimersByTime(200);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("works with zero delay", () => {
    const callback = vi.fn();
    setCancellableInterval(callback, 0);

    vi.advanceTimersByTime(0);
    expect(callback).toHaveBeenCalled();
  });

  test("callback maintains execution count across intervals", () => {
    let count = 0;
    const callback = () => {
      count++;
    };

    setCancellableInterval(callback, 50);

    vi.advanceTimersByTime(50);
    expect(count).toBe(1);

    vi.advanceTimersByTime(50);
    expect(count).toBe(2);

    vi.advanceTimersByTime(50);
    expect(count).toBe(3);
  });
});
