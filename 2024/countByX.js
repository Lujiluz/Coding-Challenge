function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }

  return z;
}

// Done by me🫡

console.log(countBy(1, 10));
console.log(countBy(2, 5));
