function firstNonRepeatingCharacter(string) {
  const characterFrequency = {};

  for (const character of string) {
    if (!(character in characterFrequency)) characterFrequency[character] = 0;
    characterFrequency[character]++;
  }

  for (let i = 0; i < string.lenght; i++) {
    const character = string[i];
    if (characterFrequency[character] === 1) return i;
  }

  return -1;

}


// o(n) time and o(1) space;
