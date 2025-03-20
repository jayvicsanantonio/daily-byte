import { describe, it, expect } from "vitest";
import functionLength from "./function-length";

describe("functionLength", () => {
  it("should return the correct length for a function with no parameters", () => {
    const noParamFn = () => {};
    expect(functionLength(noParamFn)).toBe(0);
  });

  it("should return the correct length for a function with one parameter", () => {
    const oneParamFn = (a: number) => a;
    expect(functionLength(oneParamFn)).toBe(1);
  });

  it("should return the correct length for a function with multiple parameters", () => {
    const multiParamFn = (a: number, b: number, c: number) => a + b + c;
    expect(functionLength(multiParamFn)).toBe(3);
  });

  it("should return the correct length for a function with rest parameters", () => {
    const restParamFn = (...args: number[]) => args.length;
    expect(functionLength(restParamFn)).toBe(0);
  });

  it("should return the correct length for a function with default parameters", () => {
    const defaultParamFn = (a: number, b: number = 2) => a + b;
    expect(functionLength(defaultParamFn)).toBe(1);
  });
});
