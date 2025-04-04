import { describe, it, expect } from "vitest";
import makeCounter from "./make-counter";

describe("makeCounter", () => {
  it("should start counting from the initial value", () => {
    const counter = makeCounter(5);
    expect(counter()).toBe(5);
    expect(counter()).toBe(6);
    expect(counter()).toBe(7);
  });

  it("should handle zero as the initial value", () => {
    const counter = makeCounter(0);
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });

  it("should handle negative initial values", () => {
    const counter = makeCounter(-3);
    expect(counter()).toBe(-3);
    expect(counter()).toBe(-2);
    expect(counter()).toBe(-1);
  });

  it("should handle large initial values", () => {
    const counter = makeCounter(1000000);
    expect(counter()).toBe(1000000);
    expect(counter()).toBe(1000001);
    expect(counter()).toBe(1000002);
  });

  it("should increment independently for different counters", () => {
    const counter1 = makeCounter(10);
    const counter2 = makeCounter(20);

    expect(counter1()).toBe(10);
    expect(counter1()).toBe(11);

    expect(counter2()).toBe(20);
    expect(counter2()).toBe(21);
  });
});
