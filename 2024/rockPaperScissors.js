const rps = (p1, p2) => {
  msg = (n) => `Player ${n} won!`;
  if (p1 === p2) {
    return 'Draw!';
  } else if (p1 == 'rock') {
    return p2 == 'paper' ? msg(2) : msg(1);
  } else if (p1 == 'paper') {
    return p2 == 'scissors' ? msg(2) : msg(1);
  } else if (p1 == 'scissors') {
    return p2 == 'rock' ? msg(2) : msg(1);
  }
};

// Done by me🫡

// best practice
const rpsBestPractice = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  let rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (p1 === rules[p2]) {
    return 'Player 2 won!';
  } else {
    return 'Player 1 won!';
  }
};

console.log(rps('paper', 'paper'));
console.log(rps('rock', 'scissors'));
console.log(rpsBestPractice('paper', 'paper'));
console.log(rpsBestPractice('rock', 'scissors'));
