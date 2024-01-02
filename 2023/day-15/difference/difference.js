export default function difference(array = [], values = []) {
  if (values.length > array.length) {
    return [];
  }

  return array.filter((element) => !values.includes(element));
}
