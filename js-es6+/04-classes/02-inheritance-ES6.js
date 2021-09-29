// Classes may encapsulate
// - a constructor function
// - additional operations extending the prototype
// - reference to the parent prototype

// Your code becomes more readable, when you capitalize class names, and start object names and method names 
// with a lower case letter. For instance, Person should be a class, and person should be an object.

class Shape {
    constructor( color ) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

class Rectangle extends Shape {
    constructor( color, width, height ) {
        super( color );
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

let rectangle = new Rectangle( 'red', 5, 8 );
console.log( "Area:\t\t" + rectangle.getArea() );
console.log( "Color:\t\t" + rectangle.getColor() );
console.log( "toString:\t" + rectangle.toString() );