export default function maxBy(array: Array<any>, iteratee: Function): any {
  let result: any, computed: any;

  for (const value of array) {
    const current: any = iteratee(value);
    if (current != null && (computed === undefined || current > computed)) {
      computed = current;
      result = value;
    }
  }
  return result;
}
