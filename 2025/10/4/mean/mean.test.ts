// Tests for mean utility
import { describe, test, expect } from "vitest";
import mean from "./mean";

describe("mean", () => {
  test("calculates mean of single element array", () => {
    expect(mean([5])).toBe(5);
  });

  test("calculates mean of two elements", () => {
    expect(mean([2, 4])).toBe(3);
  });

  test("calculates mean of multiple elements", () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
  });

  test("calculates mean of negative numbers", () => {
    expect(mean([-1, -2, -3])).toBe(-2);
  });

  test("calculates mean of mixed positive and negative numbers", () => {
    expect(mean([-5, 5, -10, 10])).toBe(0);
  });

  test("calculates mean of decimal numbers", () => {
    expect(mean([1.5, 2.5, 3.5])).toBe(2.5);
  });

  test("calculates mean with fractional result", () => {
    expect(mean([1, 2, 3])).toBeCloseTo(2);
  });

  test("returns NaN for empty array", () => {
    expect(mean([])).toBeNaN();
  });

  test("calculates mean of zeros", () => {
    expect(mean([0, 0, 0])).toBe(0);
  });

  test("calculates mean of large numbers", () => {
    expect(mean([1000, 2000, 3000])).toBe(2000);
  });

  test("does not mutate input array", () => {
    const input = [1, 2, 3, 4, 5];
    const original = [...input];
    mean(input);
    expect(input).toEqual(original);
  });

  test("handles array with one zero", () => {
    expect(mean([0])).toBe(0);
  });

  test("calculates mean of repeating values", () => {
    expect(mean([5, 5, 5, 5])).toBe(5);
  });
});
