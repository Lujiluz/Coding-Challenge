const quarterOf = (month) => {
  if (month <= 12 && month > 9) {
    return 4;
  } else if (month <= 9 && month > 6) {
    return 3;
  } else if (month <= 6 && month > 3) {
    return 2;
  } else if (month <= 3 && month >= 1) {
    return 1;
  }
};

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));
