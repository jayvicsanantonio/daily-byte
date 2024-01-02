function setCancellableTimeout(...args) {
  const timeoutId = setTimeout(...args);
  return () => clearTimeout(timeoutId);
}

export default setCancellableTimeout;
