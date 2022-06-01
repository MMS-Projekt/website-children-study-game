// this class configures ending_screen.html
const nameOfGame = localStorage.getItem("nameOfGame");
let score;
if (nameOfGame === "Guess sounds") {
  score = localStorage.getItem("scoreGS");
} else {
  score = localStorage.getItem("scoreMemory");
}
const grade = document.getElementById("grade");

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

window.calculGrade = () => {
  if (score < 90) {
    grade.innerHTML = "Try again! &#128540; &#128524";
  } else if (score < 120) {
    grade.innerHTML = "Not bad! &#128532;";
  } else if (score < 145) {
    grade.innerHTML = "It is okay! &#128528;";
  } else if (score < 165) {
    grade.innerHTML = "Good job! &#128522;";
  } else {
    grade.innerHTML = "Perfect! &#128526;";
  }
};

window.calculGrade();
