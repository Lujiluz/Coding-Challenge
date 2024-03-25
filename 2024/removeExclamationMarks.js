function removeExclamationMarks(s) {
  return s
    .split('')
    .filter((l) => l !== '!')
    .join('');
}

console.log(removeExclamationMarks('Hello, world!'));
console.log(removeExclamationMarks('Hello, world!'));
