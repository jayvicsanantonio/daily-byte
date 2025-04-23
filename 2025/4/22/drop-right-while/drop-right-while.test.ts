import { describe, it, expect } from 'vitest';
import dropRightWhile from './drop-right-while';

describe('dropRightWhile', () => {
  it('should drop elements from end while predicate is true', () => {
    expect(dropRightWhile([1, 2, 3, 4, 5], (n) => n > 3)).toEqual([
      1, 2, 3,
    ]);
  });

  it('should return empty array if all elements match predicate', () => {
    expect(dropRightWhile([1, 2, 3], () => true)).toEqual([]);
  });

  it('should return original array if no elements match predicate', () => {
    expect(dropRightWhile([1, 2, 3], () => false)).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(dropRightWhile([], (n) => n > 0)).toEqual([]);
  });

  it('should work with strings', () => {
    expect(dropRightWhile(['a', 'b', 'c'], (s) => s > 'b')).toEqual([
      'a',
      'b',
    ]);
  });

  it('should handle single element array', () => {
    expect(dropRightWhile([1], (n) => n > 0)).toEqual([]);
    expect(dropRightWhile([1], (n) => n < 0)).toEqual([1]);
  });
});
