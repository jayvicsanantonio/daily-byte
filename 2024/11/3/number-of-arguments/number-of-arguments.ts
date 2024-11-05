/**
 * Returns the number of arguments passed to the function.
 *
 * @param args - The arguments to be counted.
 * @returns The number of arguments.
 */
export default function numberOfArguments(...args: Array<any>): number {
  return args.length;
}
