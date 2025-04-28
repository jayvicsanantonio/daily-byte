import { describe, it, expect } from "vitest";
import { findLastIndex } from "./find-last-index";

describe("findLastIndex", () => {
  it("should return -1 for an empty array", () => {
    expect(findLastIndex([], () => true)).toBe(-1);
  });

  it("should find the last element that satisfies the predicate", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(findLastIndex(arr, (x) => x % 2 === 0)).toBe(3); // index of 4
  });

  it("should return -1 when no element satisfies the predicate", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(findLastIndex(arr, (x) => x % 2 === 0)).toBe(-1);
  });

  it("should work with strings", () => {
    const arr = ["apple", "banana", "cherry", "date"];
    expect(findLastIndex(arr, (x) => x.length > 5)).toBe(1); // index of 'banana'
  });

  it("should work with custom objects", () => {
    const arr = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
      { id: 4, active: false },
    ];
    expect(findLastIndex(arr, (x) => x.active)).toBe(2); // index of { id: 3, active: true }
  });

  it("should pass index and array to the predicate", () => {
    const arr = [10, 20, 30, 40, 50];
    const mockPredicate = vi.fn();
    findLastIndex(arr, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledTimes(5);
    expect(mockPredicate).toHaveBeenNthCalledWith(1, 10, 0, arr);
    expect(mockPredicate).toHaveBeenLastCalledWith(50, 4, arr);
  });
});
