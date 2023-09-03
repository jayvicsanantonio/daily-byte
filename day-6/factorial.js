function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(5);
factorial(7);
factorial(1);
