export default function drop(array, predicate) {
  let index = 0;

  for (; index < array.length; index++) {
    if (!predicate(array[index], index, array)) {
      break;
    }
  }

  return array.slice(index);
}
