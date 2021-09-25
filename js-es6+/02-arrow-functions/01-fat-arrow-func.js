// An arrow function expression has a shorter syntax than a regular function expression 
// and does not have its own this, arguments, super, or new.target. Let’s write an ES5 function to sum two numbers.

var sum = function( a, b ) {
    return a + b;
};
console.log(sum(2, 3));

// =>
var sum = ( a, b ) => {
    return a + b;
};
console.log(sum(2, 3));