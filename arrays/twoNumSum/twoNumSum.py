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


##Potential Solution B

def two_number_sum_b(array, target_sum):
    nums = {}
    for num in array:
        potential_match = target_sum - num
        if potential_match in nums:
            return [potential_match, num]
        else:
            nums[num] = True
    return []

# time and space = O(n) time and O(n) space


#Potential Solution C


def two_number_sum_c(array, target_sum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        current_sum = array[left] + array[right]
        if current_sum == target_sum:
            return [array[left], array[right]]
        elif current_sum < target_sum:
            left += 1
        elif current_sum > target_sum:
            right -= 1
    return []


