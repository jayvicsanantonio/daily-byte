export default function setCancellableInterval() {
  const intervalId = setInterval(...arguments);
  return () => {
    clearInterval(intervalId);
  };
}
