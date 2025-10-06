// Tests for sleep utility
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import sleep from "./sleep";

describe("sleep", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("returns a Promise", () => {
    const result = sleep(100);
    expect(result).toBeInstanceOf(Promise);
  });

  test("resolves after specified duration", async () => {
    const promise = sleep(1000);

    let resolved = false;
    promise.then(() => {
      resolved = true;
    });

    expect(resolved).toBe(false);

    vi.advanceTimersByTime(999);
    await Promise.resolve();
    expect(resolved).toBe(false);

    vi.advanceTimersByTime(1);
    await Promise.resolve();
    expect(resolved).toBe(true);
  });

  test("resolves immediately for 0 duration", async () => {
    const promise = sleep(0);

    let resolved = false;
    promise.then(() => {
      resolved = true;
    });

    vi.advanceTimersByTime(0);
    await Promise.resolve();
    expect(resolved).toBe(true);
  });

  test("can be awaited", async () => {
    const startTime = Date.now();
    const sleepPromise = sleep(500);

    vi.advanceTimersByTime(500);
    await sleepPromise;

    expect(true).toBe(true);
  });

  test("resolves to undefined", async () => {
    const promise = sleep(100);
    vi.advanceTimersByTime(100);
    const result = await promise;
    expect(result).toBeUndefined();
  });

  test("works with different durations", async () => {
    const durations = [100, 500, 1000, 2000];

    for (const duration of durations) {
      const promise = sleep(duration);
      let resolved = false;
      promise.then(() => {
        resolved = true;
      });

      vi.advanceTimersByTime(duration - 1);
      await Promise.resolve();
      expect(resolved).toBe(false);

      vi.advanceTimersByTime(1);
      await Promise.resolve();
      expect(resolved).toBe(true);
    }
  });

  test("multiple sleep calls are independent", async () => {
    const promise1 = sleep(100);
    const promise2 = sleep(200);

    let resolved1 = false;
    let resolved2 = false;

    promise1.then(() => {
      resolved1 = true;
    });

    promise2.then(() => {
      resolved2 = true;
    });

    vi.advanceTimersByTime(100);
    await Promise.resolve();
    expect(resolved1).toBe(true);
    expect(resolved2).toBe(false);

    vi.advanceTimersByTime(100);
    await Promise.resolve();
    expect(resolved1).toBe(true);
    expect(resolved2).toBe(true);
  });
});

describe("sleep (real timers)", () => {
  test("actually waits for specified duration", async () => {
    const startTime = Date.now();
    await sleep(50);
    const endTime = Date.now();
    const elapsed = endTime - startTime;

    expect(elapsed).toBeGreaterThanOrEqual(45);
    expect(elapsed).toBeLessThan(100);
  });
});
