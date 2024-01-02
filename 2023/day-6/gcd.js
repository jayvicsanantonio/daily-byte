function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, b % a);
}

gcd(12, 18);
gcd(25, 15);
gcd(40, 60);
