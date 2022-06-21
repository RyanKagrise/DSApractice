##Two Number Sum

##Take in non-empty array of distinct integers and an integer representing a target sum.

##If any two numbers in the input array sum up to the target sum, the function should return an array (any order).

##If no two numbers sum up to the target sum, the function should return an empty array.

##Note that the target sum has to be obtained by summing two different integers in the array.

##You can't add a single integer to itself in order to obtain the target sum.

##You can assume that there will be at most one pair of numbers summing up to the target sum.



##Potential Solution A

def two_number_sum_a(array, target_sum):
    for i in range(len(array) - 1):
        first_num = array[i]
        for j in range(i + 1, len(array)):
            second_num = array[j]
            if first_num + second_num == target_sum:
                return [first_num, second_num]
    return []

## Time & Space Complexity: Time = O(n^2) & Space = O(1)
