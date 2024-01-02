export default function cycle(...args) {
  let invocationCount = 0;

  return () => {
    const result = args[invocationCount];

    invocationCount++;

    if (args.length === invocationCount) {
      invocationCount = 0;
    }

    return result;
  };
}
