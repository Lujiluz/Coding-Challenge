function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a, b) => a + b) + arr2.reduce((c, d) => c + d);
}

// done by me🫡

// best practice
function arrayPlusArrayBP(arr1, arr2) {
  return arr1.concat(arr2).reduce((x, y) => x + y);
}
