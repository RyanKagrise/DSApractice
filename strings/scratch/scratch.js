function palindromeChecker(string) {
  return string === string.split('').reverse().join('');
}

//time and space = o(nlog(n)) time and o(1) space;



function stringChecker(string) {
  return string === string.split('').reverse().join('');
}

//time and space = o(nlog(n)) time and o(1) space


function alphabetSwitcher(string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, key, alphabet));
  }
  return newLetters.join('');
}

function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode % 26];
}

//time and space = o(n) time and o(n) space
