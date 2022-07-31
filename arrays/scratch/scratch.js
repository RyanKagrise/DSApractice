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

// time and space = o(n^2) time and o(1) space;



//--------------------------------------------------------------


function isValidSequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;
  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex;
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}

//time and space= o(n) time and o(1) space;



//--------------------------------------------------------------




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


//time and space = o(n^2) time and o(1) space;




//--------------------------------------------------------------



function twoNumAgain(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    let firstNum = array[i];
    for (let j = 0; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }
  return [];
}


//time and space = o(n^2) time and o(1) space;




//--------------------------------------------------------------


function twoNumAgain(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

//time and space = o(nlog(n)) time and o(1) space;



//--------------------------------------------------------------




function twoNumAgain(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    let firstNum = array[i];
    for (let j = 0; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }
  return [];
}


//time and space = o(n^2) time and o(1) space;



//--------------------------------------------------------------


function twoNumAgain(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}


//time and space = o(nlog(n)) time and o(1) space;



//--------------------------------------------------------------



function twoNumAgain(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

//time and space = o(nlog(n)) time and o(1) space;



//--------------------------------------------------------------


function twoSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}


//time and space = o(nlog(n)) time and o(1) space



//--------------------------------------------------------------


function validation(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;
  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}


//time and space = o(n) time and o(1) space



//--------------------------------------------------------------


function sortedSquare(array) {
  let squaredArray = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let squaredNumber = number * number;
    squaredArray.push(squaredNumber);
  }
  squaredArray.sort((a,b) => a - b);
  return squaredArray;
}


//time and space = o(n) time and o(n) space
