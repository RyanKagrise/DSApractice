function generateDocument(characters, document) {
  const characterCounts = {};

  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;

    characterCounts[character]++;
  }

  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0) return false;

    characterCounts[character]--;
  }

  return true;
}

// o(n + m) time and o(n) space
