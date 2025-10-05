// Tests for setCancellableTimeout utility
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import setCancellableTimeout from "./set-cancellable-timeout";

describe("setCancellableTimeout", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("returns a function", () => {
    const cancel = setCancellableTimeout(() => {}, 100);
    expect(typeof cancel).toBe("function");
  });

  test("calls callback after specified delay", () => {
    const callback = vi.fn();
    setCancellableTimeout(callback, 100);

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(99);
    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("cancel function prevents callback from executing", () => {
    const callback = vi.fn();
    const cancel = setCancellableTimeout(callback, 100);

    vi.advanceTimersByTime(50);
    expect(callback).not.toHaveBeenCalled();

    cancel();

    vi.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();
  });

  test("passes arguments to callback", () => {
    const callback = vi.fn();
    setCancellableTimeout(callback, 100, "arg1", "arg2", 123);

    vi.advanceTimersByTime(100);

    expect(callback).toHaveBeenCalledWith("arg1", "arg2", 123);
  });

  test("passes multiple arguments to callback", () => {
    const callback = vi.fn();
    setCancellableTimeout(callback, 100, "hello", 42, true);

    vi.advanceTimersByTime(100);

    expect(callback).toHaveBeenCalledWith("hello", 42, true);
  });

  test("works with no additional arguments", () => {
    const callback = vi.fn();
    setCancellableTimeout(callback, 100);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledWith();
  });

  test("can cancel immediately before execution", () => {
    const callback = vi.fn();
    const cancel = setCancellableTimeout(callback, 100);

    cancel();

    vi.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();
  });

  test("callback only executes once", () => {
    const callback = vi.fn();
    setCancellableTimeout(callback, 100);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(200);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("multiple timeouts are independent", () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    const cancel1 = setCancellableTimeout(callback1, 100);
    setCancellableTimeout(callback2, 100);

    vi.advanceTimersByTime(50);
    cancel1();

    vi.advanceTimersByTime(50);
    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  test("works with different delays", () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    setCancellableTimeout(callback1, 100);
    setCancellableTimeout(callback2, 250);

    vi.advanceTimersByTime(100);
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).not.toHaveBeenCalled();

    vi.advanceTimersByTime(150);
    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  test("calling cancel multiple times is safe", () => {
    const callback = vi.fn();
    const cancel = setCancellableTimeout(callback, 100);

    cancel();
    cancel();
    cancel();

    vi.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();
  });

  test("calling cancel after timeout executes is safe", () => {
    const callback = vi.fn();
    const cancel = setCancellableTimeout(callback, 100);

    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(1);

    cancel();
    cancel();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("works with zero delay", () => {
    const callback = vi.fn();
    setCancellableTimeout(callback, 0);

    vi.advanceTimersByTime(0);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("can cancel timeout with zero delay before it executes", () => {
    const callback = vi.fn();
    const cancel = setCancellableTimeout(callback, 0);

    cancel();

    vi.advanceTimersByTime(0);
    expect(callback).not.toHaveBeenCalled();
  });

  test("callback can access closure variables", () => {
    let value = 0;
    const callback = () => {
      value = 42;
    };

    setCancellableTimeout(callback, 100);

    expect(value).toBe(0);
    vi.advanceTimersByTime(100);
    expect(value).toBe(42);
  });
});
