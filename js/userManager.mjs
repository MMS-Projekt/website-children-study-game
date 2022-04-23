import { User } from "./user.mjs";

//Global variables
window.user;
window.image_url = "";

// Functions
/**
 * creates user and saves him in DB
 */
window.createUser = () => {
  const name = document.getElementById("tfUserName").value;
  window.user = new User(name, window.image_url);
  window.image_url = "";
  // in window.db save user
  window.location.href = "choice_of_games.html";
};

/**
 * finds existed user from DB
 */
window.findUser = () => {
  const name = document.getElementById("tfUserName").value;
  //user = find in window.db
  window.location.href = "choice_of_games.html";
};

/**
 * sets image by user
 */
window.setImageByUser = (image_url) => {
  console.log("set image by user" + image_url);
  window.image_url = image_url;
};

window.logout = () => {
  window.user = null;
  window.image_url = null;
};
