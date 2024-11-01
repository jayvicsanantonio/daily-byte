import { describe, expect, test } from "vitest";
import functionLength from "./function-length";

describe("functionLength", () => {
  test("no arguments", () => {
    expect(functionLength(function foo() {})).toBe(0);
    expect(functionLength(() => {})).toBe(0);
  });

  test("one argument", () => {
    expect(functionLength(function foo(a: number) {})).toBe(1);
    expect(functionLength((a: number) => {})).toBe(1);
  });

  test("two arguments", () => {
    expect(functionLength(function foo(a: number, b: number) {})).toBe(2);
    expect(functionLength((a: number, b: number) => {})).toBe(2);
  });

  test("multiple arguments", () => {
    expect(
      functionLength(function foo(a: number, b: number, c: number) {})
    ).toBe(3);
    expect(functionLength((a: number, b: number, c: number) => {})).toBe(3);
  });

  test("default arguments", () => {
    expect(functionLength(function foo(a, b = 2) {})).toBe(1);
    expect(functionLength(function foo(a = 1, b = 2) {})).toBe(0);
  });

  test("rest arguments", () => {
    expect(functionLength(function foo(...args) {})).toBe(0);
    expect(functionLength(function foo(a, ...args) {})).toBe(1);
    expect(functionLength(function foo(a, b, ...args) {})).toBe(2);
    expect(functionLength(function foo(a, b = 1, ...args) {})).toBe(1);
  });
});
