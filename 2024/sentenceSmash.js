function smash(words) {
  let res = '';
  const lastWord = words[words.length - 1];
  words.map((word) => {
    word === lastWord ? (res += word) : (res += word + ' ');
  });
  return res;
}
// done by me!🫡

// best practice
function smashBestPractice(words) {
  return words.join(' ');
}

// test
console.log(smash(['Hello', 'World']));
console.log(smash(['Hello', 'amazing', 'world']));
console.log(smash(['this', 'is', 'a', 'really', 'long', 'sentence']));
