function longestPeak(array) {
  let longestStreak = 0;
  let currentStreak = 0;
  for (let i = 1; i < array.length; i++) {
    const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
    if (isPeak) {
      currentStreak = getStreak(array, i);
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    }
  }
  return longestStreak
}

function getStreak(array, i) {
  let leftPointer = i;
  let rightPointer = i;
  while ( array[leftPointer - 1] < array[leftPointer]) {
    leftPointer--;
  }
  while (array[rightPointer + 1] < array[rightPointer]) {
    rightPointer++;
  }
  return rightPointer - leftPointer + 1;
}


//time and space = o(n) time and o(1) space 
