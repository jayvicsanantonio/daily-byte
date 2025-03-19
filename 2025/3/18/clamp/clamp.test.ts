import { describe, it, expect } from "vitest";
import clamp from "./clamp";

describe("clamp", () => {
  it("should return the value when it is within the range", () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  it("should return the lower bound when the value is less than the lower bound", () => {
    expect(clamp(0, 1, 10)).toBe(1);
  });

  it("should return the upper bound when the value is greater than the upper bound", () => {
    expect(clamp(15, 1, 10)).toBe(10);
  });

  it("should return the lower bound when the value equals the lower bound", () => {
    expect(clamp(1, 1, 10)).toBe(1);
  });

  it("should return the upper bound when the value equals the upper bound", () => {
    expect(clamp(10, 1, 10)).toBe(10);
  });

  it("should handle negative ranges correctly", () => {
    expect(clamp(-5, -10, -1)).toBe(-5);
    expect(clamp(-15, -10, -1)).toBe(-10);
    expect(clamp(0, -10, -1)).toBe(-1);
  });

  it("should handle cases where lower and upper bounds are the same", () => {
    expect(clamp(5, 5, 5)).toBe(5);
    expect(clamp(10, 5, 5)).toBe(5);
    expect(clamp(0, 5, 5)).toBe(5);
  });
});
