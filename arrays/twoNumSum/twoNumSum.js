//Two Number Sum

//Take in non-empty array of distinct integers and an integer representing a target sum.

//If any two numbers in the input array sum up to the target sum, the function should return an array (any order).

//If no two numbers sum up to the target sum, the function should return an empty array.

//Note that the target sum has to be obtained by summing two different integers in the array.

//You can't add a single integer to itself in order to obtain the target sum.

//You can assume that there will be at most one pair of numbers summing up to the target sum.

/* Test Cases

{
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 10
}

{
  "array": [4, 6],
  "targetSum": 10
}

{
  "array": [4, 6, 1],
  "targetSum": 5
}

*/

//Potential Solution A

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNumber = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNumber = array[j];
      if (firstNumber + secondNumber === targetSum) {
        return [firstNumber, secondNumber]
      }
    }
  }
  return [];
}


//Time & Space Complexity: Time = O(n^2) & Space = O(1)



//Potential Solution B

function twoNumSumB(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

//Time & Space Complexity: Time = O(n) & Space = O(n)



//Potential Solution C

function twoNumSumC(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum < targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

//Time & Space Complexity: Time = O(nlog(n)) & Space = O(1)
