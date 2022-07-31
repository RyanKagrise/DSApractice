function moveIt (array, toMove) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[right] !== toMove) {
      if (array[left] === toMove) swap(left, right, array);
      left++;
  } else {
    right--
    }
  }
  return array;
}

function swap(left, right, array) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}
