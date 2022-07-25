function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    let firstNum = array[i];
    for (let j = i + 1; i < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }
  return []
}

// time and space = o(n^2) time and o(1) space

function isValidSequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;
  while (arrayIndex < array.length && sequenceIndex < sequence.length){
    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex;
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}

//time and space= o(n) time and o(1) space

function twoNumSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }
  return []
}


