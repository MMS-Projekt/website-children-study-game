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
  const infoMassege = document.getElementById("info");

  let soundID = 0;
  let sound = new Audio();

  let score = 100;

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

  /**
   * check if card matches with sound
   */
  function matchCard() {
    let cardId = this.getAttribute("data-id");
    const card = cardArray[cardId].name;

    if (card === soundArray[soundID].name) {
      massege.innerText = "You have found";
      sound.pause();
      nextSound();
      toInformUser();
      isFinished();
      setTimeout(playSound, 2000);
      score += 10;
    } else {
      score = score - 5;
      if (score < 0) {
        score = 0;
      }
      massege.innerText = "You have not found";
      sound.pause();
      setTimeout(playSound, 1000);
      toInformUser();
    }
    resultDisplay.innerText = "score: " + score;
  }

  function isFinished() {
    if (soundID === soundArray.length) {
      massege.innerText = "You have done";
      finish();
    }
  }

  /**
   * gets next id of sound to play, if all sounds ware played use have done game
   */
  function nextSound() {
    if (soundID < soundArray.length) {
      soundID++;
    }
  }
  /**
   * gets how many sounds are to guess
   */
  function toInformUser() {
    infoMassege.innerText =
      "You have to guess " + (soundArray.length - soundID) + " sounds";
  }

  /**
   * goes to next html ans save info in localStorage
   */
  function finish() {
    localStorage.setItem("scoreGS", score); // save score in localStorage
    localStorage.setItem("nameOfGame", "Guess sounds"); // save name of game in localStorage

    setTimeout(goToEndingScreen, 4000);
  }

  /**
   * play sound
   */
  function playSound() {
    if (soundID < soundArray.length) {
      const src = soundArray[soundID].sound;
      sound = new Audio(src);
      sound.play();
    }
  }

  /**
   * goes to score screen
   */
  function goToEndingScreen() {
    window.location.href = "ending_screen.html";
  }

  createBoard();
  toInformUser();
  setTimeout(playSound, 2000);
});
