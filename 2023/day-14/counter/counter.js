export default function counter(initialValue) {
  let count = initialValue ?? 0;

  return () => {
    return count++;
  };
}
