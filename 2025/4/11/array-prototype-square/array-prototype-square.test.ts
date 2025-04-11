import { describe, it, expect } from 'vitest';
import './array-prototype-square';

declare global {
  interface Array<T> {
    square(): number[];
  }
}

describe('Array.prototype.square', () => {
  it('should return empty array when input is empty', () => {
    const arr: number[] = [];
    expect(arr.square()).toEqual([]);
  });

  it('should square all positive numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.square()).toEqual([1, 4, 9, 16, 25]);
  });

  it('should handle negative numbers', () => {
    const arr = [-2, -1, 0, 1, 2];
    expect(arr.square()).toEqual([4, 1, 0, 1, 4]);
  });

  it('should handle decimal numbers', () => {
    const arr = [0.5, 1.5, 2.5];
    expect(arr.square()).toEqual([0.25, 2.25, 6.25]);
  });

  it('should handle array with single element', () => {
    const arr = [10];
    expect(arr.square()).toEqual([100]);
  });

  it('should not modify original array', () => {
    const arr = [1, 2, 3];
    const squared = arr.square();
    expect(arr).toEqual([1, 2, 3]);
    expect(squared).toEqual([1, 4, 9]);
  });
});
