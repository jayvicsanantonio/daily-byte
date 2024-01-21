export default function cycle(...args) {
  let index = 0;

  return () => {
    if (index === args.length) {
      index = 0;
    }

    const value = args[index];
    index++;

    return value;
  };
}
