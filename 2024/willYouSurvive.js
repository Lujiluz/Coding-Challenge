const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};

// Done by me🫡

// console.log(zeroFuel(50, 25, 2))
// console.log(zeroFuel(100, 50, 1))
