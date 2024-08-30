import { describe, expect, test } from "vitest";
import setCancellableInterval from "./cancellable-interval";

describe("setCancellableInterval", () => {
  test("returns a function", () => {
    expect(typeof setCancellableInterval(() => {})).toBe("function");
  });

  test("cancelled immediately", async () => {
    expect.assertions(2);

    const promise = new Promise((resolve: Function) => {
      let i = 0;

      setInterval(() => {
        // Ensure setInterval callback is never called.
        expect(i).toBe(0);
        resolve();
      });

      const cancel = setCancellableInterval(() => {
        i++;
      }, 10);

      cancel();
      expect(i).toBe(0);
    });

    await promise;
  });

  test("after running once", (done) => {
    let i = 0;

    const cancel = setCancellableInterval(() => {
      i++;
    }, 10);

    setTimeout(() => {
      expect(i).toBe(1);
      cancel();
      done();
    }, 15);

    expect(i).toBe(0);
  });
});
