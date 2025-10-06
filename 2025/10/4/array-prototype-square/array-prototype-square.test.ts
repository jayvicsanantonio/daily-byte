// Tests for Array.prototype.square extension
import { describe, test, expect } from "vitest";
import "./array-prototype-square";

describe("Array.prototype.square", () => {
  test("squares all elements in array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.square()).toEqual([1, 4, 9, 16, 25]);
  });

  test("works with empty array", () => {
    const arr: number[] = [];
    expect(arr.square()).toEqual([]);
  });

  test("works with single element", () => {
    const arr = [5];
    expect(arr.square()).toEqual([25]);
  });

  test("works with negative numbers", () => {
    const arr = [-1, -2, -3];
    expect(arr.square()).toEqual([1, 4, 9]);
  });

  test("works with mixed positive and negative numbers", () => {
    const arr = [-5, 5, -3, 3];
    expect(arr.square()).toEqual([25, 25, 9, 9]);
  });

  test("works with zero", () => {
    const arr = [0];
    expect(arr.square()).toEqual([0]);
  });

  test("works with zeros in array", () => {
    const arr = [0, 1, 0, 2, 0];
    expect(arr.square()).toEqual([0, 1, 0, 4, 0]);
  });

  test("works with decimal numbers", () => {
    const arr = [0.5, 1.5, 2.5];
    expect(arr.square()).toEqual([0.25, 2.25, 6.25]);
  });

  test("does not mutate original array", () => {
    const arr = [1, 2, 3];
    const original = [...arr];
    arr.square();
    expect(arr).toEqual(original);
  });

  test("returns new array", () => {
    const arr = [1, 2, 3];
    const squared = arr.square();
    expect(squared).not.toBe(arr);
  });

  test("works with large numbers", () => {
    const arr = [100, 1000];
    expect(arr.square()).toEqual([10000, 1000000]);
  });

  test("works with fractional results", () => {
    const arr = [0.1, 0.2];
    const result = arr.square();
    expect(result[0]).toBeCloseTo(0.01);
    expect(result[1]).toBeCloseTo(0.04);
  });

  test("can be chained with other array methods", () => {
    const arr = [1, 2, 3];
    const result = arr.square().map((x) => x + 1);
    expect(result).toEqual([2, 5, 10]);
  });

  test("works on array created with Array constructor", () => {
    const arr = Array.from([2, 3, 4]);
    expect(arr.square()).toEqual([4, 9, 16]);
  });
});
