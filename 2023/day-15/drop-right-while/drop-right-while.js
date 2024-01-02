export default function dropRightWhile(array, predicate) {
  let i = array.length - 1;

  for (; i >= 0; i--) {
    if (!predicate(array[i], i, array)) {
      break;
    }
  }

  return array.slice(0, i + 1);
}
