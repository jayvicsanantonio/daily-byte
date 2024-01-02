function perfectSquare(number) {
  return perfectSquareHelper(number, 0, number);
}

function perfectSquareHelper(number, low, high) {
  if (low > high) {
    return false;
  }

  const mid = Math.floor((low + high) / 2);

  if (mid * mid === number) {
    return true;
  } else if (mid * mid > number) {
    return perfectSquareHelper(number, low, mid - 1);
  } else {
    return perfectSquareHelper(number, mid + 1, high);
  }
}

perfectSquare(16);
perfectSquare(14);
perfectSquare(9);
