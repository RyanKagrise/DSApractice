# Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

# A subsequence of an array is a set of numbers that aren't neccesarily adjacent in the array but that are in the same order as they appear in the array.

# For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a single number in an array and the array itself are both valid subsequences of the array.


def valid_sequence(array, sequence) {
    arrayIndex = 0
    sequenceIndex = 0
    while arrayIndex < len(array) and sequenceIndex < len(sequence):
      if array[arrayIndex] == sequence[sequenceIndex]:
          sequenceIndex += 1
      arrayIndex += 1
    return sequenceIndex == len(sequence)
}


# time and space = O(n) time and O(1) space



# alternative solution


def valid_sequence_b(array, sequence):
  sequenceIndex = 0
  for value in array:
    if sequenceIndex == len(sequence):
        break
    if sequence[sequenceIndex] == value:
        sequenceIndex += 1
  return sequenceIndex == len(sequence)


# time and space = O(n) time and O(1) space



