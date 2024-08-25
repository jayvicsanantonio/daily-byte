export default function difference(array, values) {
  return array.filter((element) => !values.includes(element));
}
