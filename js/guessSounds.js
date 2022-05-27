// this class realizes guess sounds game
document.addEventListener("DOMContentLoaded", () => {
    let cardArray;
  cardArray = [
    {
      name: "bird",
      img: "/html/imageAnimals/bird.png",
    },

    {
      name: "cat",
      img: "/html/imageAnimals/cat.png",
    },

    {
      name: "cow",
      img: "/html/imageAnimals/cow.png",
    },

    {
      name: "dog",
      img: "/html/imageAnimals/dog.png",
    },

    {
      name: "horse",
      img: "/html/imageAnimals/horse.png",
    },

    {
      name: "lion",
      img: "/html/imageAnimals/lion.png",
    },

    {
      name: "pig",
      img: "/html/imageAnimals/pig.png",
    },

    {
      name: "monkey",
      img: "/html/imageAnimals/monkey.png",
    },
  ];

  soundArray = [
    {
      name: "bird",
      img: "/html/AnimalSound/bird.wav",
    },

    {
      name: "cat",
      img: "/html/AnimalSound/cat.wav",
    },

    {
      name: "cow",
      img: "/html/AnimalSound/cow.wav",
    },

    {
      name: "dog",
      img: "/html/AnimalSound/dog.wav",
    },

    {
      name: "horse",
      img: "/html/AnimalSound/horse.wav",
    },

    {
      name: "lion",
      img: "/html/AnimalSound/lion.wav",
    },

    {
      name: "pig",
      img: "/html/AnimalSound/pig.wav",
    },

    {
      name: "monkey",
      img: "/html/AnimalSound/monkey.wav",
    },

  ];

  soundArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.getElementById("score");
  const massege = document.querySelector("h2");

  let score = 0; // TODO score richtig berechnen

  /**
   *  create your board
   */
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", cardArray[i].img);
      card.setAttribute("data-id", i);
      card.setAttribute("width", "200");
      card.addEventListener("click", matchCard);
      grid.appendChild(card);
    }
  }

  function matchCard() {
    massege.innerHTML =
    "You have to find the matching animal for this sound";
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
