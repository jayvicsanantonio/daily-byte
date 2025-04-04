import { describe, it, expect } from 'vitest';
import mean from './mean';

describe('mean', () => {
  it('should calculate the mean of an array of positive numbers', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
  });

  it('should calculate the mean of an array including negative numbers', () => {
    expect(mean([-1, 0, 1])).toBe(0);
    expect(mean([-5, -10, -15])).toBe(-10);
  });

  it('should calculate the mean of an array including zero', () => {
    expect(mean([0, 0, 0])).toBe(0);
    expect(mean([1, 2, 0, 3, 4])).toBe(2);
  });

  it('should calculate the mean of an array with a single element', () => {
    expect(mean([42])).toBe(42);
  });

  it('should return NaN for an empty array', () => {
    expect(mean([])).toBeNaN();
  });

  it('should calculate the mean of an array with floating-point numbers', () => {
    expect(mean([1.5, 2.5, 3.5])).toBe(2.5);
    expect(mean([1.1, 2.2, 3.3])).toBeCloseTo(2.2); // Use toBeCloseTo for potential floating point inaccuracies
  });
});
