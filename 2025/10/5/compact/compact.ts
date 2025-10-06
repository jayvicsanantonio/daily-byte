export default function compact<T>(array: Array<T>): Array<T> {
	if (!Array.isArray(array)) {
		throw new Error("Input should be an array");
	}

	return array.filter(Boolean);
}
