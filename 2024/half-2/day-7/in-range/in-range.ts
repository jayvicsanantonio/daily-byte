export default function inRange(
  value: number,
  start: number = 0,
  end?: number
): boolean {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  return value >= start && value < end;
}
