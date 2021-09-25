// Use cases of fat arrows: syntactic sugar, more compact way of writing functions.

// An arrow function expression has a shorter syntax than a regular function expression 
// and does not have its own this, arguments, super, or new.target. Let’s write an ES5 function to sum two numbers.

var sum1 = function( a, b ) {
    return a + b;
};
console.log(sum(2, 3));

// =>
var sum2 = ( a, b ) => {
    return a + b;
};
console.log(sum(2, 3));

// If the return value of the function can be described by one expression, and the function body has no side-effects,
// then we can omit the braces and the return keyword.

var sum3 = ( a, b ) => a + b;
console.log(sum(2, 3));

// If a function has only one argument, parentheses are not needed on the left of the fat arrow

var square = a => a * a;
console.log(square(2));

// Ex
// Write an arrow function that expects an array of integers, and returns the sum of the elements of the array.
const sum = (arr) => arr.reduce((a,b) => a + b);