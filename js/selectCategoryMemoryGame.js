/**
 * saves selected category for for memory game in localStore
 * @param {*} category is name of selected category for memory game
 */
window.saveSelectedCategory = (category) => {
  console.log(category);
  localStorage.setItem("categoryOfMemoryGame", category); // with name "categoryOfMemoryGame", you can get category of game
  goMemoryGameScreen();
};

/**
 * go to memory game screen
 */
function goMemoryGameScreen() {
  window.location.href = "memory_game.html";
}
