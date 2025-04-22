import { describe, it, expect } from 'vitest';
import chunk from './chunk';

describe('chunk', () => {
  it('should return empty array when input is not an array', () => {
    expect(chunk(null as any)).toEqual([]);
    expect(chunk(undefined as any)).toEqual([]);
    expect(chunk({} as any)).toEqual([]);
  });

  it('should return empty array when size is less than 1', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  it('should chunk array with default size of 1', () => {
    expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  it('should chunk array with specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  it('should handle empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should handle size larger than array length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });
});
