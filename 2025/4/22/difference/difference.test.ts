import { expect, test } from 'vitest';
import difference from './difference';

test('should return an empty array when both input arrays are empty', () => {
  expect(difference([], [])).toEqual([]);
});

test('should return first array when second array is empty', () => {
  expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
});

test('should return empty array when first array is empty', () => {
  expect(difference([], [1, 2, 3])).toEqual([]);
});

test('should return values from first array that are not in second array', () => {
  expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
});

test('should work with arrays containing strings', () => {
  expect(difference(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']);
});

test('should handle arrays with duplicate values', () => {
  expect(difference([1, 1, 2, 2], [2])).toEqual([1]);
});

test('should handle arrays with sparse elements (empty positions)', () => {
  const sparseArray = [1, , 3, , 5];
  expect(difference(sparseArray, [1, 5])).toEqual([3]);
});

test('should handle arrays with undefined elements', () => {
  const arrayWithUndefined = [1, undefined, 3];
  expect(difference(arrayWithUndefined, [1])).toEqual([undefined, 3]);
});

test('should handle arrays with null elements', () => {
  const arrayWithNull = [1, null, 3];
  expect(difference(arrayWithNull, [3])).toEqual([1, null]);
});

test('should handle sparse arrays in second argument', () => {
  const sparseArray = [1, , 3];
  expect(difference([1, 2, 3], sparseArray)).toEqual([2]);
});

test('should handle duplicates in second array', () => {
  expect(difference([1, 2, 3], [2, 2, 2])).toEqual([1, 3]);
});

test('should handle duplicates in both arrays', () => {
  expect(difference([1, 1, 2, 2, 3], [2, 2, 3, 3])).toEqual([1]);
});

test('should handle duplicate strings', () => {
  expect(difference(['a', 'a', 'b', 'b'], ['b', 'b'])).toEqual(['a']);
});

test('should handle mixed duplicates with undefined and null', () => {
  expect(
    difference([null, null, undefined, undefined], [null])
  ).toEqual([undefined]);
});
