// this class configures ending_screen.html
const nameOfGame = localStorage.getItem("nameOfGame");
const score = localStorage.getItem("score");

//set name of game
document.getElementById("nameOfGame").innerHTML = "Scores of " + nameOfGame;

//set users score
document.getElementById("score").innerHTML = "Your score is " + score;
