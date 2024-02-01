var countSheep = function (num) {
  if (num > 0) {
    let res = '';
    for (let i = 1; i <= num; i++) {
      res += i + ' sheep...';
    }
    return res;
  }
  return '';
};

// Done by me🫡

// Best practice
var bestPractice = function (num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

console.log(bestPractice(0));
console.log(bestPractice(1));
console.log(bestPractice(3));

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
