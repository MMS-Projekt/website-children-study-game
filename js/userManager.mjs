// this realizes manager of user object

import { User } from "./user.mjs";

//Global variables
window.image_url;

// Functions
/**
 * creates user and saves him in DB
 */
window.createUser = () => {
  const name = document.getElementById("tfUserName").value;
  localStorage.setItem(
    "user",
    JSON.stringify(new User(name, window.image_url))
  );
  // TODO in window.db save user
  window.location.href = "choice_of_games.html";
};

/**
 * finds existed user from DB
 */
window.findUser = () => {
  const name = document.getElementById("tfUserName").value;
  //user = find in window.db
  // save in localStorage
  // if found -> game else -> create user
  window.location.href = "choice_of_games.html";
};

/**
 * sets image by user
 */
window.setImageByUser = (image_url) => {
  console.log("set image by user" + image_url);
  window.image_url = image_url;
};

/**
 * user logout
 */
window.logout = () => {
  localStorage.removeItem("user");
  localStorage.setItem("scoreGS", 0);
  localStorage.setItem("scoreMemory", 0);
  localStorage.setItem("nameOfGame", "");
};

// get and set of user
window.getName = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user.name;
};

window.getImage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user.image_url;
};

window.getScoreMemory = () => {
  const score = localStorage.getItem("scoreMemory");
  if (score === null) {
    return "0";
  }
  return score;
};

window.getScoreGS = () => {
  const score = localStorage.getItem("scoreGS");
  if (score === null) {
    return "0";
  }
  return score;
};

window.setScoreMemory = (newScore) => {
  const user = JSON.parse(localStorage.getItem("user"));
  user.scoreByMemory = newScore;
};

window.setScoreGS = (newScore) => {
  const user = JSON.parse(localStorage.getItem("user"));
  user.scoreByGS = newScore;
};
