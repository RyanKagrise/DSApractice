function lengthEncoding(string) {
  const encodedStringCharacters = [];
  let currentLength = 1;

  for (let i = 1; i < string.length; i++) {
    const currentCharacter = string[i];
    const previousCharacter = string[i - 1];

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      encodedStringCharacters.push(currentLength.toString());
      encodedStringCharacters.push(previousCharacter);
      currentLength = 0;
    }

    currentLength++;
  }

  encodedStringCharacters.push(currentLength.toString());
  encodedStringCharacters.push(string[string.length - 1]);

  return encodedStringCharacters.join('');
}
