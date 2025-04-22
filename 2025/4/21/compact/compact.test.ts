import { describe, it, expect } from 'vitest';
import compact from './compact';

describe('compact', () => {
  it('should remove falsy values from array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  it('should handle array with only falsy values', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
  });

  it('should handle array with only truthy values', () => {
    expect(compact([1, 'hello', [], {}])).toEqual([
      1,
      'hello',
      [],
      {},
    ]);
  });

  it('should handle empty array', () => {
    expect(compact([])).toEqual([]);
  });

  it('should preserve nested arrays and objects', () => {
    expect(compact([[1, 2], { a: 1 }, false])).toEqual([
      [1, 2],
      { a: 1 },
    ]);
  });
});
