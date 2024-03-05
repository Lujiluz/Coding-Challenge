function feast(beast, dish) {
  let beastChar = [beast.charAt(0), beast.charAt(beast.length - 1)];
  let dishChar = [dish.charAt(0), dish.charAt(dish.length - 1)];

  return beastChar[0] == dishChar[0] && beastChar[1] == dishChar[1] ? true : false;
}

// done by me🫡

console.log(feast('great blue heron', 'garlic naan'));
console.log(feast('chickadee', 'chocolate cake'));
console.log(feast('brown bear', 'bear claw'));
