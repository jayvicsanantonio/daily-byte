import { describe, it, expect } from 'vitest';
import fill from './fill';

describe('fill', () => {
  it('fills array with value from start to end', () => {
    expect(fill([1, 2, 3], 'a')).toEqual(['a', 'a', 'a']);
    expect(fill([1, 2, 3], 'a', 1)).toEqual([1, 'a', 'a']);
    expect(fill([1, 2, 3], 'a', 1, 2)).toEqual([1, 'a', 3]);
  });

  it('handles negative start index', () => {
    expect(fill([1, 2, 3], 'a', -2)).toEqual([1, 'a', 'a']);
  });

  it('handles negative end index', () => {
    expect(fill([1, 2, 3], 'a', 0, -1)).toEqual(['a', 'a', 3]);
  });

  it('works with empty arrays', () => {
    expect(fill([], 'a')).toEqual([]);
  });

  it('works with different types', () => {
    expect(fill([1, 2, 3], 0)).toEqual([0, 0, 0]);
    expect(fill([true, false], false)).toEqual([false, false]);
    expect(fill(['a', 'b', 'c'], 'x')).toEqual(['x', 'x', 'x']);
  });
});
