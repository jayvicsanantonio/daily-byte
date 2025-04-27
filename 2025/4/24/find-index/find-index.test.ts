import { describe, it, expect } from 'vitest';
import findIndex from './find-index';

describe('findIndex', () => {
  it('should find first matching element index', () => {
    const array = [1, 2, 3, 4, 5];
    const result = findIndex(array, (x) => x > 3);
    expect(result).toBe(3);
  });

  it('should return -1 if no element matches', () => {
    const array = [1, 2, 3];
    const result = findIndex(array, (x) => x > 5);
    expect(result).toBe(-1);
  });

  it('should start search from fromIndex', () => {
    const array = [1, 2, 3, 2, 5];
    const result = findIndex(array, (x) => x === 2, 2);
    expect(result).toBe(3);
  });

  it('should handle negative fromIndex', () => {
    const array = [1, 2, 3, 4, 5];
    const result = findIndex(array, (x) => x > 3, -2);
    expect(result).toBe(3);
  });

  it('should work with empty array', () => {
    const array: number[] = [];
    const result = findIndex(array, (x) => x > 0);
    expect(result).toBe(-1);
  });

  it('should work with array of objects', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = findIndex(array, (x) => x.id === 2);
    expect(result).toBe(1);
  });
});
