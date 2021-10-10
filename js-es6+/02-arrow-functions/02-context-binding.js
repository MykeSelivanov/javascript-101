// Whenever you want to use the lexical value of this coming from outside the scope of the function, use arrow functions.

// Equivalence transformation for fat arrows is the following:
// ES2015
// ( ARGUMENTS ) => VALUE;

// ES5 
// function( ARGUMENTS ) { return VALUE; }.bind( this );

// For blocks
// ES2015
// ( ARGUMENTS ) => {
//     // ...
// };

// ES5 
// function( ARGUMENTS ) { 
//     // ...
// }.bind( this );

// In constructor functions and prototype extensions, it does not make sense to use fat arrows.

// Examples

// Context binding is usually performed in one of the following two ways:
// by defining a self = this variable,
// by using the bind function.

// ES5 with self
var Ball = function (x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.dt = 25; // 1000/25 = 40 frames per second
    var self = this;
    setInterval(function () {
        self.x += vx;
        self.y += vy;
        console.log(self.x, self.y);
    }, this.dt);
}

var ball = new Ball(0, 0, 1, 2);

// ES5 with .bind()
// The bind method binds the context of the setInterval function argument to this.
var Ball2 = function (x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.dt = 25; // 1000/25 = 40 frames per second
    setInterval(function () {
        this.x += vx;
        this.y += vy;
        console.log(this.x, this.y);
    }.bind(this), this.dt);
}

// ES6
// In ES6, arrow functions come with automatic context binding. The lexical value of this 
// isn’t shadowed by the scope of the arrow function. Therefore, you save yourself thinking about context binding.
var BallES6 = function (x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.dt = 25; // 1000/25 = 40 frames per second
    setInterval(() => {
        this.x += vx;
        this.y += vy;
        console.log(this.x, this.y);
    }, this.dt);
}

b = new BallES6(0, 0, 1, 1);

// Ex
// Use arrow function wherever it makes sense
// In constructor functions and prototype extensions, it does not make sense to use fat arrows.
var Entity = function (name, delay) {
    this.name = name;
    this.delay = delay;
};
Entity.prototype.greet = function () {
    setTimeout(() => {
        console.log('Hi, I am ' + this.name);
    }, this.delay);
};

var java = new Entity('Java', 5000);
var cpp = new Entity('C++', 30);
java.greet();
cpp.greet();