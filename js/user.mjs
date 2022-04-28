export class User {
  constructor(name, image_url) {
    (this.name = name),
      (this.image_url = image_url), // url of image for user acount
      // score for games
      (this.scoreByMemory = 0),
      (this.scoreByGS = 0);
  }
}
