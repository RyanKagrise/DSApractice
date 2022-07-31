function selection(array) {
  let startIndex = 0;
  while (startIndex < array.length - 1) {
    let smallestIndex = startIndex;
    for (let i = startIndex + 1; i < array.length; i++) {
      if (array[smallestIndex] > array[i]) smallestIndex = i;
    }
    swap(startIndex, smallestIndex, array);
    startIndex++
    }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}


//time and space = o(n^2) time and o(1) space


//--------------------------------------------------------------
