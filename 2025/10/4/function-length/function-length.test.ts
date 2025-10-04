// Tests for functionLength utility
import { describe, test, expect } from "vitest";
import functionLength from "./function-length";

describe("functionLength", () => {
  test("returns 0 for function with no parameters", () => {
    function noParams() {
      return "hello";
    }
    expect(functionLength(noParams)).toBe(0);
  });

  test("returns 1 for function with one parameter", () => {
    function oneParam(a: number) {
      return a;
    }
    expect(functionLength(oneParam)).toBe(1);
  });

  test("returns 2 for function with two parameters", () => {
    function twoParams(a: number, b: string) {
      return `${a} ${b}`;
    }
    expect(functionLength(twoParams)).toBe(2);
  });

  test("returns 3 for function with three parameters", () => {
    function threeParams(x: number, y: number, z: number) {
      return x + y + z;
    }
    expect(functionLength(threeParams)).toBe(3);
  });

  test("ignores rest parameters in count", () => {
    function withRest(a: number, b: number, ...rest: number[]) {
      return a + b + rest.length;
    }
    expect(functionLength(withRest)).toBe(2);
  });

  test("ignores default parameters in count", () => {
    function withDefaults(a: number, b = 10, c = 20) {
      return a + b + c;
    }
    expect(functionLength(withDefaults)).toBe(1);
  });

  test("counts parameters before first default parameter", () => {
    function mixedParams(a: number, b: number, c = 30) {
      return a + b + c;
    }
    expect(functionLength(mixedParams)).toBe(2);
  });

  test("works with arrow functions", () => {
    const arrowFn = (x: number, y: number) => x + y;
    expect(functionLength(arrowFn)).toBe(2);
  });

  test("works with arrow function with no parameters", () => {
    const arrowNoParams = () => 42;
    expect(functionLength(arrowNoParams)).toBe(0);
  });

  test("works with function expressions", () => {
    const funcExpr = function (a: string, b: string, c: string) {
      return a + b + c;
    };
    expect(functionLength(funcExpr)).toBe(3);
  });

  test("works with built-in functions", () => {
    expect(functionLength(Math.max)).toBeGreaterThan(0);
    expect(functionLength(parseInt)).toBe(2);
  });

  test("works with class methods", () => {
    class TestClass {
      method(a: number, b: number) {
        return a + b;
      }
    }
    const instance = new TestClass();
    expect(functionLength(instance.method)).toBe(2);
  });
});
