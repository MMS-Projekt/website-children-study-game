class User{
    constructor(id,name, image){
        this.id = id,
        this.name = name,
        this.image = image, // url of image for user acount 
        // score for games
        this.scoreByMemory = 0,
        this.scoreByGS = 0      
    }

    getName(){
        return this.name
    }

    getScoreByMemory(){
        return this.getSoreByMemory
    }

    getScoreByGS(){
        return this.scoreByGS
    }
}