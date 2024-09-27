export default function range(end: number): Array<number>;
export default function range(
  start: number,
  end: number,
  step?: number
): Array<number>;
export default function range(
  start: number = 0,
  end?: number,
  step: number = 1
): Array<number> {
  let result: Array<number> = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (end < start && step === 1) {
    step = -1;
  }

  const length = (end - start) / (step || 1);

  for (let i = 0; i < length; i++) {
    result.push(start + i * step);
  }

  return result;
}
