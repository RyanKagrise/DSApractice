def three_num_sum(array, target_sum):
  array.sort()
  triplets = []
  for i in range(len(array) - 2):
    left = i + 1
    right = len(array) - 1
    
