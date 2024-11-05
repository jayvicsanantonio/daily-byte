import { describe, expect, test } from "vitest";
import setCancellableTimeout from "./cancellable-timeout";

describe("setCancellableTimeout", () => {
  test("returns a function", () => {
    expect(typeof setCancellableTimeout(() => {})).toBe("function");
  });

  test("cancelled immediately", async () => {
    expect.assertions(2);

    const promise = new Promise((resolve: Function) => {
      let i = 0;

      setTimeout(() => {
        // Ensure setTimeout callback is never called.
        expect(i).toBe(0);
        resolve();
      });

      const cancel = setCancellableTimeout(() => {
        i++;
      }, 10);
      cancel();
      expect(i).toBe(0);
    });

    await promise;
  });

  test("not cancelled", async () => {
    expect.assertions(2);

    const promise = new Promise((resolve: Function) => {
      let i = 0;

      setCancellableTimeout(() => {
        i++;
        expect(i).toBe(1);
        resolve();
      }, 100);

      expect(i).toBe(0);
    });

    await promise;
  });
});
