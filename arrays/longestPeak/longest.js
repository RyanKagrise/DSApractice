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

