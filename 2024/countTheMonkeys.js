function monkeyCount(n) {
  let monkey_counter = [];
  for (let i = 1; i <= n; i++) {
    monkey_counter.push(i);
  }
  return monkey_counter;
}

console.log(monkeyCount(10));
console.log(monkeyCount(1));
console.log(monkeyCount(5));
console.log(monkeyCount(6));
console.log(monkeyCount(20));
