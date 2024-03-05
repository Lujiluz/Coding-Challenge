function feast(beast, dish) {
  let beastChar = [beast.charAt(0), beast.charAt(beast.length - 1)];
  let dishChar = [dish.charAt(0), dish.charAt(dish.length - 1)];

  return beastChar[0] == dishChar[0] && beastChar[1] == dishChar[1] ? true : false;
}

// done by me🫡

// best practice
function feastBestPractice(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

console.log(feastBestPractice('great blue heron', 'garlic naan'));
console.log(feastBestPractice('chickadee', 'chocolate cake'));
console.log(feastBestPractice('brown bear', 'bear claw'));
