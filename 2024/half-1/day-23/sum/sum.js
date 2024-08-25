export default function sum(valueA) {
  return (valueB) => {
    return valueB === undefined ? valueA : sum(valueA + valueB);
  };
}
