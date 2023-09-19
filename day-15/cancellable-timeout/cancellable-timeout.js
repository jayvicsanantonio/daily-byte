export default function setCancellableTimeout() {
  const timeoutId = setTimeout(...arguments);
  return () => clearTimeout(timeoutId);
}
