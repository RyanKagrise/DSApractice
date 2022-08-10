function generateDocument(characters, document) {
  const sortedChars = characters.split('').sort();
  const sortedDoc = characters.split('').sort();

  let j = 0;
  let i = 0;
  while (j < sortedChars.length && i < sortedDoc.length) {
    if (sortedChars[j] > sortedDoc[i]) return false;
    else if (sortedChars[j] === sortedDoc[i]) i++;
    j++;
  }

  return i === sortedDoc.length;
}
