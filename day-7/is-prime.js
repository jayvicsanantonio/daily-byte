function checkDivisor(number, divisor) {
  if (divisor > Math.sqrt(number)) {
    return true;
  }

  if (number % divisor === 0) {
    return false;
  }

  return checkDivisor(number, divisor + 1);
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  return checkDivisor(number, 2);
}

isPrime(7);
isPrime(12);
isPrime(23);
