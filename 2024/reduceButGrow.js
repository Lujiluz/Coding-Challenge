function grow(x) {
  let result;
  x.reduce((acc, curr) => (result = acc * curr));
  return result;
}

// DONE BY ME🫡
console.log(grow([1,2,3,4]))