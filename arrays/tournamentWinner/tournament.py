#alternate solutions


def tournamentWinner(comp, results):

dic = {} #dictionary to store winners
max = 0 #variable to track min points of any team
current_winner = '#' #variable to track current winner

for i in range(len(comp)): #iterate through comp list

  match = comp[i]
  resultIndex = abs(results[i] - 1) #find index of winner from result list
  winner = comp[i][resultIndex]

  if winner in dic:
      pts = dic[winner]
      pts += 3
      if pts > max: #check to see if update pts is greater than current maximum
          max = pts
          current_winner = winner
      dic.update({winner : pts}) #update winner record

  else:
      pts = 3
      dic[winner] = 3
      if pts > max: #check to see if winner pts is greater than current maximum
          max = pts
          current_winner = winner

return current_winner
