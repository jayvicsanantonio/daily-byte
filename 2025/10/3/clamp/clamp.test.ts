// Test suite for clamp function
import { describe, expect, test } from "vitest";
import clamp from "./clamp";

describe("clamp", () => {
  test("returns lower bound when value is below range", () => {
    expect(clamp(5, 10, 20)).toBe(10);
    expect(clamp(-10, 0, 100)).toBe(0);
    expect(clamp(-5, -3, 10)).toBe(-3);
  });

  test("returns upper bound when value is above range", () => {
    expect(clamp(25, 10, 20)).toBe(20);
    expect(clamp(150, 0, 100)).toBe(100);
    expect(clamp(15, -10, 10)).toBe(10);
  });

  test("returns value when within range", () => {
    expect(clamp(15, 10, 20)).toBe(15);
    expect(clamp(50, 0, 100)).toBe(50);
    expect(clamp(0, -10, 10)).toBe(0);
  });

  test("returns value when equal to lower bound", () => {
    expect(clamp(10, 10, 20)).toBe(10);
    expect(clamp(0, 0, 100)).toBe(0);
    expect(clamp(-5, -5, 5)).toBe(-5);
  });

  test("returns value when equal to upper bound", () => {
    expect(clamp(20, 10, 20)).toBe(20);
    expect(clamp(100, 0, 100)).toBe(100);
    expect(clamp(5, -5, 5)).toBe(5);
  });

  test("handles negative ranges", () => {
    expect(clamp(-15, -20, -10)).toBe(-15);
    expect(clamp(-25, -20, -10)).toBe(-20);
    expect(clamp(-5, -20, -10)).toBe(-10);
  });

  test("handles decimal values", () => {
    expect(clamp(5.5, 0, 10)).toBe(5.5);
    expect(clamp(10.7, 0, 10)).toBe(10);
    expect(clamp(-0.5, 0, 10)).toBe(0);
  });

  test("handles zero as bounds", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, -10, 0)).toBe(-5);
    expect(clamp(0, 0, 0)).toBe(0);
  });
});
