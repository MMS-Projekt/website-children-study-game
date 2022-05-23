document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
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

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.getElementById("score");

  let score = 0; // TODO score richtig berechnen

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
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

  //check for matches
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
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
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
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.innerHTML = "score: " + score;
    console.log(cardsWon.length);
    if (cardsWon.length === cardArray.length / 2) {
      localStorage.setItem("score", score);
      // TODO window mit Score

      // go to ending screen
      localStorage.setItem("nameOfGame");
      window.location.href = "ending_screen.html";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
