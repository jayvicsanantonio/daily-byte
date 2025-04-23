import { expect, test, describe } from 'vitest';
import dropWhile from './drop-while';

describe('dropWhile', () => {
  test('should drop elements while predicate returns true', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = dropWhile(numbers, (x) => x < 3);
    expect(result).toEqual([3, 4, 5]);
  });

  test('should return empty array if predicate is true for all elements', () => {
    const numbers = [1, 2, 3];
    const result = dropWhile(numbers, (x) => x < 4);
    expect(result).toEqual([]);
  });

  test('should return original array if predicate is false for first element', () => {
    const numbers = [3, 1, 2];
    const result = dropWhile(numbers, (x) => x < 3);
    expect(result).toEqual([3, 1, 2]);
  });

  test('should work with index in predicate', () => {
    const letters = ['a', 'b', 'c', 'd'];
    const result = dropWhile(letters, (_, i) => i < 2);
    expect(result).toEqual(['c', 'd']);
  });

  test('should handle empty array', () => {
    const empty: number[] = [];
    const result = dropWhile(empty, (x) => x < 5);
    expect(result).toEqual([]);
  });
});
