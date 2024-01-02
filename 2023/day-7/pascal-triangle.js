function pascalTriangle(numRows) {
  if (numRows === 0) {
    return [];
  }

  if (numRows === 1) {
    return [[1]];
  }

  const triangle = pascalTriangle(numRows - 1);
  const previous = triangle[numRows - 2];
  const current = [1];

  for (let i = 1; i < numRows - 1; i++) {
    current[i] = previous[i - 1] + previous[i];
  }

  current.push(1);
  triangle.push(current);

  return triangle;
}

pascalTriangle(3);
pascalTriangle(5);
pascalTriangle(1);
