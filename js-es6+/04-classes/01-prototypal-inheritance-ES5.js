// The concepts of prototypes and prototypal inheritance in ES5 are hard to understand for 
// many developers transitioning from another programming language to JavaScript.

// ES6 classes introduce syntactic sugar to make prototypes look like classical inheritance.

// For this reason, some people applaud classes, as it makes JavaScript appear more familiar to them. 
// Others seem to have launched a holy war against classes, claiming that the class syntax is flawed.

function Shape( color ) {
    this.color = color;
}

Shape.prototype.getColor = function() {
    return this.color;
}

function Rectangle( color, width, height ) {
    Shape.call( this, color );
    this.width = width;
    this.height = height;
};

Rectangle.prototype = Object.create( Shape.prototype );
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

let rectangle = new Rectangle( 'red', 5, 8 );
console.log( rectangle.getArea() );
console.log( rectangle.getColor() );
console.log( rectangle.toString() );