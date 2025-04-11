import { describe, it, expect, vi } from 'vitest';
import sleep from './sleep';

describe('sleep', () => {
  it('should return a Promise', () => {
    const sleepPromise = sleep(1);
    expect(sleepPromise).an.instanceOf(Promise);
  });
  it('should delay execution for specified milliseconds', async () => {
    const start = Date.now();
    await sleep(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });

  it('should resolve after delay even with zero milliseconds', async () => {
    const start = Date.now();
    await sleep(0);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(0);
  });

  it('should handle negative delay values by resolving immediately', async () => {
    const start = Date.now();
    await sleep(-100);
    const end = Date.now();
    expect(end - start).toBeLessThan(50);
  });

  it('should work with setTimeout', async () => {
    const timeoutSpy = vi.spyOn(global, 'setTimeout');
    await sleep(100);
    expect(timeoutSpy).toHaveBeenCalledWith(
      expect.any(Function),
      100
    );
    timeoutSpy.mockRestore();
  });

  it('should be able to delay multiple times in sequence', async () => {
    const delays = [100, 200, 300];
    const start = Date.now();

    for (const delay of delays) {
      await sleep(delay);
    }

    const end = Date.now();
    const totalDelay = delays.reduce((sum, delay) => sum + delay, 0);
    expect(end - start).toBeGreaterThanOrEqual(totalDelay);
  });

  it('should not block other async operations', () => {
    let i = 0;

    sleep(50).then(() => {
      i++;
      expect(i).toBe(3);
    });

    setTimeout(() => {
      i++;
      expect(i).toBe(2);
    }, 25);

    i++;
    expect(i).toBe(1);
  });
});
