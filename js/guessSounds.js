// this class realizes guess sounds game

document.addEventListener("DOMContentLoaded", () => {
  let cardArray = [
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

  let soundArray = [
    {
      name: "bird",
      sound: "/html/AnimalSound/bird.wav",
    },

    {
      name: "cat",
      sound: "/html/AnimalSound/cat.wav",
    },

    {
      name: "cow",
      sound: "/html/AnimalSound/cow.wav",
    },

    {
      name: "dog",
      sound: "/html/AnimalSound/dog.wav",
    },

    {
      name: "horse",
      sound: "/html/AnimalSound/horse.wav",
    },

    {
      name: "lion",
      sound: "/html/AnimalSound/lion.wav",
    },

    {
      name: "pig",
      sound: "/html/AnimalSound/pig.wav",
    },

    {
      name: "monkey",
      sound: "/html/AnimalSound/monkey.wav",
    },
  ];

  soundArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.getElementById("score");
  const massege = document.querySelector("h2");
  const playBtn = document.getElementById("playBtn");
  playBtn.addEventListener("click", playSound);

  let soundID = 0;
  let sound = new Audio();

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
    //const cards = document.querySelectorAll("img");

    let cardId = this.getAttribute("data-id");
    const card = cardArray[cardId].name;

    if (card === soundArray[soundID].name) {
      //cards[cardId].removeEventListener("click", matchCard);
      massege.innerText = "You have found";
      sound.pause();
      nextSound();
      setTimeout(playSound, 1000);
    } else {
      massege.innerText = "You have not found";
      setTimeout(playSound, 1000);
    }
  }

  function nextSound() {
    if (soundID < soundArray.length) {
      soundID++;
    } else {
      massege.innerText = "You have done";
    }
  }
  function playSound() {
    const src = soundArray[soundID].sound;
    sound = new Audio(src);
    sound.play();
  }

  createBoard();
  setTimeout(playSound, 1000);
});
