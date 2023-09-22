export default function makeCounter(initialValue = 0) {
  let value = initialValue;

  return {
    get() {
      return value;
    },

    increment() {
      return ++value;
    },

    decrement() {
      return --value;
    },

    reset() {
      value = initialValue;
      return value;
    },
  };
}
