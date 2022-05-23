window.saveSelectedCategory = (category) => {
  console.log(category);
  localStorage.setItem("categoryOfMemoryGame", category);
  window.location.href = "memory_game.html";
};
