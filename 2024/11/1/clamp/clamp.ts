/**
 * Restricts a value within specified bounds.
 * @param value The number to clamp
 * @param lower The minimum value
 * @param upper The maximum value
 * @returns The clamped value
 * @throws {Error} When lower bound is greater than upper bound
 */
export default function clamp(
  value: number,
  lower: number,
  upper: number
): number {
  if (lower > upper) {
    throw new Error("Lower bound must be less than upper bound");
  }

  if (value < lower) {
    return lower;
  }

  if (value > upper) {
    return upper;
  }

  return value;
}
