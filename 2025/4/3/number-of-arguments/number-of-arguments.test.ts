import { describe, it, expect } from 'vitest';
import numberOfArguments from './number-of-arguments';

describe('numberOfArguments', () => {
  it('should return 0 when no arguments are passed', () => {
    expect(numberOfArguments()).toBe(0);
  });

  it('should return 1 when one argument is passed', () => {
    expect(numberOfArguments(1)).toBe(1);
    expect(numberOfArguments('a')).toBe(1);
    expect(numberOfArguments(null)).toBe(1);
    expect(numberOfArguments(undefined)).toBe(1);
    expect(numberOfArguments({})).toBe(1);
    expect(numberOfArguments([])).toBe(1);
  });

  it('should return the correct count for multiple arguments', () => {
    expect(numberOfArguments(1, 2, 3)).toBe(3);
    expect(numberOfArguments('a', 'b', 'c', 'd')).toBe(4);
    expect(numberOfArguments(1, 'a', null, {}, [])).toBe(5);
  });

  it('should handle various data types correctly', () => {
    const func = () => {};
    const sym = Symbol('test');
    expect(
      numberOfArguments(true, false, 100, -5.5, 'hello', func, sym)
    ).toBe(7);
  });
});
