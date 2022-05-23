// this class realizes the memory game

document.addEventListener("DOMContentLoaded", () => {
  //card options
  // get selected category from category_memory_game_screen.html
  const category = localStorage.getItem("categoryOfMemoryGame");
  let cardArray;
  if (category === "Animals") {
    //array of animals
    cardArray = [
      {
        name: "fries",
        img: "/html/imageAccount/boy1.png",
      },

      {
        name: "pizza",
        img: "/html/imageAccount/boy2.png",
      },

      {
        name: "fries",
        img: "/html/imageAccount/boy1.png",
      },

      {
        name: "pizza",
        img: "/html/imageAccount/boy2.png",
      },
    ];
  } else {
    // other category
    cardArray = [
      {
        name: "fries",
        img: "/html/imageAccount/boy1.png",
      },

      {
        name: "pizza",
        img: "/html/imageAccount/boy2.png",
      },
    ];
  }

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.getElementById("score");
  const massege = document.querySelector("h2");

  let score = 0; // TODO score richtig berechnen

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  /**
   *  create your board
   */
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "/html/imageForGames/white_square.png");
      card.setAttribute("data-id", i);
      card.setAttribute("width", "200");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  /**
   * check for matches
   * save score of user and name of game in localStorage. They will be used by score screen
   */
  function checkForMatch() {
    const cards = document.querySelectorAll("img");

    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute(
        "src",
        "/html/imageForGames/white_square.png"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "/html/imageForGames/white_square.png"
      );
      massege.innerHTML = "You have clicked the same image &#128528;";
    } else if (cardsChosen[0] === cardsChosen[1]) {
      massege.innerHTML = "You found a match &#128522; &#128526;";
      // TODO brechnen score
      score = score + 5;
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute(
        "src",
        "/html/imageForGames/white_square.png"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "/html/imageForGames/white_square.png"
      );
      massege.innerHTML = "Wrong pair &#128524;";
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.innerHTML = "score: " + score;

    if (cardsWon.length === cardArray.length / 2) {
      //user won
      localStorage.setItem("score", score); // save score in localStorage
      localStorage.setItem("nameOfGame", "Memory game"); // save name of game in localStorage

      massege.innerHTML = "you've done &#128077;";

      // go to ending screen
      setTimeout(goToEndingScreen, 4000);
    }
  }

  /**
   * flip your card
   */
  function flipCard() {
    massege.innerHTML =
      "You have to find " +
      (cardArray.length / 2 - cardsWon.length) +
      " pairs &#128521;";
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  /**
   * goes to score screen
   */
  function goToEndingScreen() {
    window.location.href = "ending_screen.html";
  }

  createBoard();
});
