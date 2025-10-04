// Tests for makeCounter utility
import { describe, test, expect } from "vitest";
import makeCounter from "./make-counter";

describe("makeCounter", () => {
  test("returns a function", () => {
    const counter = makeCounter();
    expect(typeof counter).toBe("function");
  });

  test("starts at 0 by default", () => {
    const counter = makeCounter();
    expect(counter()).toBe(0);
  });

  test("increments on each call", () => {
    const counter = makeCounter();
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
    expect(counter()).toBe(3);
  });

  test("starts at custom initial value", () => {
    const counter = makeCounter(10);
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
  });

  test("works with negative initial values", () => {
    const counter = makeCounter(-5);
    expect(counter()).toBe(-5);
    expect(counter()).toBe(-4);
    expect(counter()).toBe(-3);
  });

  test("maintains independent state for multiple counters", () => {
    const counter1 = makeCounter(0);
    const counter2 = makeCounter(100);

    expect(counter1()).toBe(0);
    expect(counter2()).toBe(100);
    expect(counter1()).toBe(1);
    expect(counter2()).toBe(101);
    expect(counter1()).toBe(2);
    expect(counter2()).toBe(102);
  });

  test("counter state persists across multiple calls", () => {
    const counter = makeCounter(5);
    counter();
    counter();
    counter();
    expect(counter()).toBe(8);
  });

  test("works with large numbers", () => {
    const counter = makeCounter(999998);
    expect(counter()).toBe(999998);
    expect(counter()).toBe(999999);
    expect(counter()).toBe(1000000);
  });

  test("each counter instance is independent", () => {
    const counter1 = makeCounter();
    const counter2 = makeCounter();
    const counter3 = makeCounter();

    counter1();
    counter1();
    counter2();

    expect(counter1()).toBe(2);
    expect(counter2()).toBe(1);
    expect(counter3()).toBe(0);
  });

  test("maintains closure over counter variable", () => {
    const counter = makeCounter(42);
    const firstCall = counter();
    const secondCall = counter();

    expect(firstCall).toBe(42);
    expect(secondCall).toBe(43);
    expect(counter()).toBe(44);
  });
});
