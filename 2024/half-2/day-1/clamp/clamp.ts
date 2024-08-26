export default function clamp(
  value: number,
  lower: number,
  upper: number
): number {
  if (value > lower && value < upper) {
    return value;
  }

  if (value <= lower) {
    return lower;
  }

  if (value >= upper) {
    return upper;
  }

  throw "Not implemented";
}
