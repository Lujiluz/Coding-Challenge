function sumMix(x) {
  let res = [];
  x.map((y) => (typeof y == 'string' ? res.push(parseInt(y)) : res.push(y)));

  return res.reduce((a, b) => a + b);
}

// done by me🫡

console.log(sumMix([9, 3, '7', '3']));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));
