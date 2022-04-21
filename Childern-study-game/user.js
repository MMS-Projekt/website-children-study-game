class User{
    constructor(id,name){
        this.id = id,
        this.name = name,
        // score for games
        this.scoreByMemory = 0,
        this.scoreByGS = 0      
    }

    getName(){
        return this.name
    }
}