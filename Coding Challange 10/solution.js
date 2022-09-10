
// 1.
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5.
const { odds: team1, x: draw, team2 } = game;

// 6.
const printGoals = function () {
  console.log(...game.scored, ...game.score);
};
printGoals();

// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
