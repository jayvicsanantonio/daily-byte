import { describe, test, expect } from "vitest";
import mean from "./mean";

describe("mean", () => {
  test("returns NaN for empty input array", () => {
    expect(mean([])).toBeNaN();
  });

  test("returns the single value for an array with one element", () => {
    expect(mean([0])).toEqual(0);
  });

  test("returns the mean of two values", () => {
    expect(mean([1, 3])).toEqual(2);
  });
});
