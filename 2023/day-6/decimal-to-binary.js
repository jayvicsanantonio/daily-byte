function decimalToBinary(number) {
  if (number === 0) {
    return "";
  }

  const quotient = Math.floor(number / 2);
  const remainder = number % 2;

  return decimalToBinary(quotient) + remainder;
}

decimalToBinary(10);
decimalToBinary(27);
decimalToBinary(5);
