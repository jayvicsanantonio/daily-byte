export default function chunk<T>(array: Array<T>, size = 1): Array<Array<any>> {
  return array.reduce((acc: Array<Array<any>>, item: T, index: number) => {
    if (index % size === 0) {
      acc.push([item]);
    } else {
      acc[acc.length - 1].push(item);
    }
    return acc;
  }, []);
}
