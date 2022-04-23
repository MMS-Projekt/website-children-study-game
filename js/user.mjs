export class User {
  constructor(name, image_url) {
    (this.name = name),
      (this.image_url = image_url), // url of image for user acount
      // score for games
      (this.scoreByMemory = 0),
      (this.scoreByGS = 0);
  }

  getName() {
    return this.name;
  }

  getScoreByMemory() {
    return this.getSoreByMemory;
  }

  getScoreByGS() {
    return this.scoreByGS;
  }

  getImageUrl() {
    return this.image_url;
  }

  setScoreByMemory(newScore) {
    this.scoreByMemory = newScore;
  }

  setScoreByGS(newScore) {
    this.getScoreByGS = newScore;
  }
}
