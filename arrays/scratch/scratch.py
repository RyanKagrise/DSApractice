def two_num(array, target_sum):
  for i in range(len(array) - 1):
    first_num = array[i]
    for j in range(i + 1, len(array)):
      second_num = array[j]
      if first_num + second_num == target_sum:
        return [first_num, second_num]
  return []
