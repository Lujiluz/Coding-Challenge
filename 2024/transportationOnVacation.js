function rentalCarCost(d) {
  costPerDay = 40;
  if (d >= 7) {
    return costPerDay * d - 50;
  } else if (d >= 3) {
    return costPerDay * d - 20;
  } else return costPerDay * d;
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(5));
console.log(rentalCarCost(6));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));
console.log(rentalCarCost(9));
console.log(rentalCarCost(10));
