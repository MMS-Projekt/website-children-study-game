// this class realizes guess sounds game
document.addEventListener("DOMContentLoaded", () => {
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

  function matchCard() {}

  createBoard();
});
