export default function sleep(duration: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
