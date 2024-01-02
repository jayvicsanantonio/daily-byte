export default function inRange(value, start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  return value >= start && value < end;
}
