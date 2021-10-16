// Create a PlayerCharacter and a NonPlayerCharacter with a common ancestor Character. 
// The characters are located in a 10x10 game field. All characters appear at a random location. 
// Create the three classes, and make sure you can query where each character is.

class Character {
    constructor( id, name, x, y ) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
  }

  get position() {
    return { x: this.x, y: this.y };
  }
}
class PlayerCharacter extends Character { }
class NonPlayerCharacter extends Character { }

function createPlayer( id, name ) {
 let x = Math.floor( Math.random() * 10 ), y = Math.floor( Math.random() * 10 );
    return new PlayerCharacter( id, name, x, y );
}

function createNonPlayer( id, name ) {
 let x = Math.floor( Math.random() * 10 ), y = Math.floor( Math.random() * 10 );
 return new NonPlayerCharacter( id, name, x, y );
}