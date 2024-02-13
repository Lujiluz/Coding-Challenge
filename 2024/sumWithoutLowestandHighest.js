function sumArray(array) {
  return array == null || array.length <= 2
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, c) => a + c);
}

// done by me🫡
