// Classes may encapsulate
// - a constructor function
// - additional operations extending the prototype
// - reference to the parent prototype

// Your code becomes more readable, when you capitalize class names, and start object names and method names 
// with a lower case letter. For instance, Person should be a class, and person should be an object.

// The extends keyword defines the is-a relationship between Shape and Rectangle. All instances of Rectangle are also instances of Shape.
// The constructor method runs when you instantiate a class. You can call the constructor method of your parent class with super (more on super later).
// Methods can be defined inside classes. All objects can call methods of their class and all classes that are higher in the inheritance chain.
// Instantiation works in the same way as the instantiation of an ES5 constructor function.
// The methods are written using the concise method syntax. 

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

