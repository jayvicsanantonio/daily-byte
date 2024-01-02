function sqrt(num) {
  if (num < 2) {
    return num;
  }

  let left = 2;
  let right = Math.floor(num / 2);

  while (left < right) {
    const pivot = Math.floor(left + (right - left) / 2);

    if (pivot * pivot > num) {
      right = pivot - 1;
    } else if (pivot * pivot < num) {
      left = pivot + 1;
    } else {
      return pivot;
    }
  }

  return right;
}

sqrt(100);
sqrt(9);
sqrt(8);
sqrt(4);
sqrt(2);
sqrt(1);
sqrt(0);
