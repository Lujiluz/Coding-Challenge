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

console.log(rps('paper', 'paper'));
console.log(rps('rock', 'scissors'));
