export default function compact(array: Array<any>): Array<any> {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter(Boolean);
}
