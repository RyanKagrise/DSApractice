const home_team_win = 1;

function tournamentWinner (competitions, results) {
  let current_best_team = '';
  const scores = {[current_best_team]: 0};

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === home_team_win ? homeTeam : awayTeam;

    if (scores[winningTeam] > scores[current_best_team]) {
      current_best_team = winningTeam;
    }
  }
  return current_best_team;
}
