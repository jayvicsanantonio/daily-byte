function basicSum(n) {
  if (n <= 0) {
    return 0;
  }

  return n + basicSum(n - 1);
}

basicSum(5);
basicSum(10);
basicSum(1);
