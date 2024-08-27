import promiseResolve from "./promise-resolve";
// const promiseResolve = Promise.resolve.bind(Promise);
import { describe, test, expect } from "vitest";

describe("promiseResolve", () => {
  test("returns promise", () => {
    expect(promiseResolve(1) instanceof Promise).toStrictEqual(true);
  });

  describe("non-promise", () => {
    test("returns promise", () => {
      expect(promiseResolve(1) instanceof Promise).toStrictEqual(true);
    });

    test("resolves", async () => {
      const p = promiseResolve(42);
      expect(p).resolves.toStrictEqual(42);
    });
  });

  describe("promise", () => {
    test("returns promise", () => {
      expect(
        promiseResolve(new Promise((resolve) => resolve(42))) instanceof Promise
      ).toStrictEqual(true);
    });

    test("returns the same promise instance", () => {
      const p = new Promise((resolve) => resolve(42));
      expect(promiseResolve(p)).toStrictEqual(p);
    });

    test("resolves", async () => {
      const p = promiseResolve(new Promise((resolve) => resolve(42)));
      expect(p).resolves.toStrictEqual(42);
    });

    test("nested", async () => {
      const p = promiseResolve(
        new Promise((resolve) => resolve(new Promise((resolve) => resolve(42))))
      );
      expect(p).resolves.toStrictEqual(42);
    });

    test("rejects", async () => {
      const p = promiseResolve(new Promise((_, reject) => reject(42)));
      expect(p).rejects.toStrictEqual(42);
    });

    test("use with then", async (done) => {
      expect.assertions(1);
      const p = promiseResolve(new Promise((resolve) => resolve(42)));
      const result = await p;
      expect(result).toStrictEqual(42);
    });
  });

  describe("thenable", () => {
    test("returns promise", () => {
      expect(
        promiseResolve({
          then(resolve) {
            resolve(42);
          },
        }) instanceof Promise
      ).toStrictEqual(true);
    });

    test("resolves", async () => {
      const p = promiseResolve({
        then(resolve) {
          resolve(42);
        },
      });
      expect(p).resolves.toStrictEqual(42);
    });

    test("throw", async () => {
      const p = promiseResolve({
        then(resolve) {
          throw 42;
        },
      });
      expect(p).rejects.toStrictEqual(42);
    });

    test("throw after resolving", async () => {
      const p = promiseResolve({
        then(resolve) {
          resolve(42);
          throw 42;
        },
      });
      expect(p).resolves.toStrictEqual(42);
    });

    test("rejects", async () => {
      const p = promiseResolve({
        then(_, reject) {
          reject(42);
        },
      });
      expect(p).rejects.toStrictEqual(42);
    });

    test("use with then", async (done) => {
      expect.assertions(1);
      const p = promiseResolve({
        then(resolve) {
          resolve(42);
        },
      });
      const result = await p;
      expect(result).toStrictEqual(42);
    });

    test("nested", async () => {
      const p = promiseResolve({
        then(resolve) {
          resolve({
            then(resolve) {
              resolve(42);
            },
          });
        },
      });
      expect(p).resolves.toStrictEqual(42);
    });

    test("can access `this`", async () => {
      const p = promiseResolve({
        value: 42,
        then(resolve) {
          resolve(this.value);
        },
      });
      expect(p).resolves.toStrictEqual(42);
    });
  });

  test("use with Promise.all()", async () => {
    const p0 = promiseResolve(3);
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("foo");
      }, 100);
    });

    expect(Promise.all([p0, p1])).resolves.toStrictEqual([3, "foo"]);
  });

  test("use with Promise.allSettled()", async () => {
    const p0 = promiseResolve(2);
    const p1 = promiseResolve(3);

    const res = await Promise.allSettled([p0, p1]);
    expect(res).toEqual([
      {
        status: "fulfilled",
        value: 2,
      },
      {
        status: "fulfilled",
        value: 3,
      },
    ]);
  });

  test("use with Promise.any()", async () => {
    const p0 = promiseResolve(2);
    const p1 = new Promise((_, reject) => {
      setTimeout(() => {
        reject(3);
      }, 10);
    });

    const res = await Promise.any([p0, p1]);
    expect(res).toEqual(2);
  });

  test("use with Promise.race()", async () => {
    const p0 = promiseResolve(2);
    const p1 = new Promise((_, reject) => {
      setTimeout(() => {
        reject(3);
      }, 10);
    });

    const res = await Promise.race([p0, p1]);
    expect(res).toEqual(2);
  });
});
