export default function compact(array: Array<any>) {
  if (!Array.isArray) {
    throw new Error("Invalid input");
  }

  return array.filter(Boolean);
}
