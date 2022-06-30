#alternate solutions


def tournamentWinner(comp, results):

dic = {}
max = 0
current_winner = '#'

for i in range(len(comp)):

  match = comp[i]
  resultIndex = abs(results[i] - 1)
  winner = comp[i][resultIndex]

  if winner in dic:
      pts = dic[winner]
      pts += 3
      if pts > max:
          max = pts
          current_winner = winner
      dic.update({winner : pts})

  else:
      pts = 3
      dic[winner] = 3
      if pts > max:
          max = pts
          current_winner = winner

return current_winner
