// Tests for numberOfArguments utility
import { describe, test, expect } from "vitest";
import numberOfArguments from "./number-of-arguments";

describe("numberOfArguments", () => {
  test("returns 0 when called with no arguments", () => {
    expect(numberOfArguments()).toBe(0);
  });

  test("returns 1 when called with one argument", () => {
    expect(numberOfArguments("hello")).toBe(1);
  });

  test("returns 2 when called with two arguments", () => {
    expect(numberOfArguments(1, 2)).toBe(2);
  });

  test("returns 3 when called with three arguments", () => {
    expect(numberOfArguments("a", "b", "c")).toBe(3);
  });

  test("returns correct count for many arguments", () => {
    expect(numberOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(10);
  });

  test("counts null as an argument", () => {
    expect(numberOfArguments(null)).toBe(1);
  });

  test("counts undefined as an argument", () => {
    expect(numberOfArguments(undefined)).toBe(1);
  });

  test("counts mixed types correctly", () => {
    expect(numberOfArguments(1, "string", true, null, undefined, {}, [])).toBe(
      7,
    );
  });

  test("counts objects as arguments", () => {
    expect(numberOfArguments({ key: "value" }, { foo: "bar" })).toBe(2);
  });

  test("counts arrays as arguments", () => {
    expect(numberOfArguments([1, 2, 3], [4, 5])).toBe(2);
  });

  test("counts functions as arguments", () => {
    const fn1 = () => {};
    const fn2 = () => {};
    expect(numberOfArguments(fn1, fn2)).toBe(2);
  });

  test("counts boolean values as arguments", () => {
    expect(numberOfArguments(true, false)).toBe(2);
  });

  test("counts zero as an argument", () => {
    expect(numberOfArguments(0)).toBe(1);
  });

  test("counts empty string as an argument", () => {
    expect(numberOfArguments("")).toBe(1);
  });

  test("counts NaN as an argument", () => {
    expect(numberOfArguments(NaN)).toBe(1);
  });
});
