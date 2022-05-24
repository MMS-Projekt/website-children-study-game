// this class configures page of user

const nameOfUser = document.getElementById("nameOfUser");
nameOfUser.innerText = "Hello " + window.getName();

const imageOfUser = document.getElementById("imageOfUser");
imageOfUser.src = window.getImage();

const scoreOfMemory = document.getElementById("scoreOfMemory");
scoreOfMemory.innerText = "Memory: " + window.getScoreMemory() + " points";

const scoreOfGS = document.getElementById("scoreOfGS");
scoreOfGS.innerText = "Guess sounds: " + window.getScoreGS() + " points";
