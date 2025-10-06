// Tests for compact utility function
import { describe, expect, test } from "vitest";
import compact from "./compact";

describe("compact", () => {
	test("removes falsy values from array", () => {
		expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
	});

	test("removes null and undefined", () => {
		expect(compact([1, null, 2, undefined, 3])).toEqual([1, 2, 3]);
	});

	test("removes NaN", () => {
		expect(compact([1, NaN, 2, 3])).toEqual([1, 2, 3]);
	});

	test("handles array with all falsy values", () => {
		expect(compact([false, null, 0, "", undefined, NaN])).toEqual([]);
	});

	test("handles array with all truthy values", () => {
		expect(compact([1, 2, 3, "hello", true])).toEqual([1, 2, 3, "hello", true]);
	});

	test("handles empty array", () => {
		expect(compact([])).toEqual([]);
	});

	test("preserves truthy objects", () => {
		const obj = { id: 1 };
		expect(compact([obj, null, false])).toEqual([obj]);
	});

	test("preserves truthy arrays", () => {
		expect(compact([[1, 2], [], false])).toEqual([[1, 2], []]);
	});

	test("preserves string values including empty string removed", () => {
		expect(compact(["hello", "", "world"])).toEqual(["hello", "world"]);
	});

	test("preserves numbers except 0", () => {
		expect(compact([0, 1, 2, 3, -1])).toEqual([1, 2, 3, -1]);
	});

	test("does not mutate original array", () => {
		const original = [0, 1, false, 2, "", 3];
		const copy = [...original];
		compact(original);
		expect(original).toEqual(copy);
	});

	test("throws error when input is not an array", () => {
		expect(() => compact("not an array" as any)).toThrow(
			"Input should be an array",
		);
	});

	test("throws error when input is null", () => {
		expect(() => compact(null as any)).toThrow("Input should be an array");
	});

	test("throws error when input is undefined", () => {
		expect(() => compact(undefined as any)).toThrow("Input should be an array");
	});

	test("handles mixed types", () => {
		expect(compact([1, "two", true, null, { key: "value" }, false, 0])).toEqual(
			[1, "two", true, { key: "value" }],
		);
	});
});
