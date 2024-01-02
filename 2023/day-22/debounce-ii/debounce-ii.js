export default function debounce(fn, delay) {
  let timeoutId = null;
  let context = null;
  let argsToInvoke = null;

  const clearTimer = function () {
    clearTimeout(timeoutId);
    timeoutId = null;
  };

  const invoke = function () {
    if (timeoutId === null) {
      return;
    }

    clearTimer();
    fn.apply(context, argsToInvoke);
  };

  const debouncedFn = function (...args) {
    argsToInvoke = args;
    context = this;
    clearTimer();
    timeoutId = setTimeout(() => {
      invoke();
    }, delay);
  };

  debouncedFn.cancel = clearTimer;
  debouncedFn.flush = invoke;

  return debouncedFn;
}
