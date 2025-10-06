import { describe, expect, test } from "vitest";
import chunk from "./chunk";

describe("chunk", () => {
	test("chunks array into groups of specified size", () => {
		expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
	});

	test("chunks array evenly when length is divisible by size", () => {
		expect(chunk([1, 2, 3, 4], 2)).toEqual([
			[1, 2],
			[3, 4],
		]);
	});

	test("returns single chunk when size equals array length", () => {
		expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
	});

	test("returns multiple single-element chunks when size is 1", () => {
		expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
	});

	test("returns array of chunks when size is larger than array length", () => {
		expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
	});

	test("handles empty array", () => {
		expect(chunk([], 2)).toEqual([]);
	});

	test("throws error when size is less than 1", () => {
		expect(() => chunk([1, 2, 3], 0)).toThrow("Chunk size mus be >= 1");
	});

	test("throws error when size is negative", () => {
		expect(() => chunk([1, 2, 3], -1)).toThrow("Chunk size mus be >= 1");
	});

	test("works with string arrays", () => {
		expect(chunk(["a", "b", "c", "d", "e"], 2)).toEqual([
			["a", "b"],
			["c", "d"],
			["e"],
		]);
	});

	test("works with object arrays", () => {
		const objs = [{ id: 1 }, { id: 2 }, { id: 3 }];
		expect(chunk(objs, 2)).toEqual([[{ id: 1 }, { id: 2 }], [{ id: 3 }]]);
	});

	test("does not mutate original array", () => {
		const original = [1, 2, 3, 4, 5];
		const copy = [...original];
		chunk(original, 2);
		expect(original).toEqual(copy);
	});

	test("chunks array with size 3", () => {
		expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
			[1, 2, 3],
			[4, 5, 6],
			[7],
		]);
	});
});
