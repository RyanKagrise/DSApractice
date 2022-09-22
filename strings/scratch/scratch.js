function palindromeChecker(string) {
  return string === string.split('').reverse().join('');
}

//time and space = o(nlog(n)) time and o(1) space;


//--------------------------------------------------------------


function stringChecker(string) {
  return string === string.split('').reverse().join('');
}

//time and space = o(nlog(n)) time and o(1) space






//--------------------------------------------------------------


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




//----------------------------------------------------------






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




//--------------------------------------------------------------


function stringChecker(string) {
  return string === string.split('').reverse().join('');
}

//time and space = o(nlog(n)) time and o(1) space






//--------------------------------------------------------------


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




//----------------------------------------------------------


function lengthEncoded(string) {
  const resultsArray = [];
  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    let currentCharacter = string[i];
    let previousCharacter = string[i - 1];

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      resultsArray.push(currentRunLength.toString());
      resultsArray.push(previousCharacter);
      currentRunLength = 0;
    }
    currentRunLength++;
  }

  resultsArray.push(currentRunLength.toString());
  resultsArray.push(string[string.length - 1]);

  return resultsArray.join('');
}

// o(n) time and space!



//--------------------------------------------------------------

function stringPractice(words) {
  const anagrams = {};
  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}


//--------------------------------------------------------------


//--------------------------------------------------------------

//--------------------------------------------------------------

//--------------------------------------------------------------

//--------------------------------------------------------------

//--------------------------------------------------------------

//--------------------------------------------------------------
