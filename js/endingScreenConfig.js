// this class configures ending_screen.html
const nameOfGame = localStorage.getItem("nameOfGame");
const score = localStorage.getItem("score");

//set name of game
document.getElementById("nameOfGame").innerHTML = "Scores of " + nameOfGame;

//set users score
document.getElementById("score").innerHTML = "Your score is " + score;

window.playAgain = () => {
  if (nameOfGame === "Guess sounds") {
    window.location.href = "/html/gs_game_screen.html";
  } else if (nameOfGame === "Memory game") {
    window.location.href = "/html/memory_game.html";
  }
};
