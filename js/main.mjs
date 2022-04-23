import { User } from "./user.mjs";

//Global variables
window.user;
window.db;

// Functions
/**
 * creates user and saves him in DB
 */
window.createUser = () => {
  const name = document.getElementById("tfUserName").value;
  const foto_url = ""; // have to get url of foto
  console.log(name);
  window.user = new User(name, foto_url);
  console.log(window.user);
};

/**
 * finds existed user from DB
 */
window.findUser = () => {
  const name = document.getElementById("tfUserName").value;
  //user = find in DB
  console.log("findUser " + name);
};

/**
 * create conncetion with database
 */
window.conncetionDB = () => {
  // window.db = new Database()...
  console.log("Hier shoud be connection with DB");
};
