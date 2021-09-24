// Variables declared with var have function scope. 
// This means that they are accessible inside the function/block they are defined in.

var guessMe = 2;
console.log("guessMe: " + guessMe); // A: guessMe is 2
( function() {
    console.log("guessMe: " + guessMe); // B: guessMe is undefined
    var guessMe = 5;
    console.log("guessMe: " + guessMe); // C: guessMe is 5
} )();
console.log("guessMe: " + guessMe); // D: guessMe is 2

// Variables declared with var are initialized to undefined. This is why the value of guessMe was undefined in comment B.

// If a variable is declared using var inside a function, the Javascript engine treats them as 
// if they are declared at the top of a functional scope. However, if that variable has been declared 
// outside the function, it has a global scope regardless of where the actual declaration occurs. 
// This is called hoisting.

() => {
    var test = 5;
};
//accessing test will give an error here

// Var age is logged as undefined, since age was hoisted and initialized with undefined
function logAge() {
    console.log( 'age:', age ); // undefined
    var age = 25;
}
logAge();

// Variables declared with let have block scope. They are valid inside the block they are defined in.
// let is hoisted similarly to var, but it's not initialized as undefined
// name is console.log is in temporal dead zone
function logName() {
    console.log( 'name:', name ); // temporal dead zone
    let name = 'Ben';
}
logName();

// The temporal dead zone exists even if a variable with the same name exists outside the scope of the dead zone.

let test2 = 1;
console.log( 'test2: ', test2 );// A: test2 is 1
{
    // Temporal Dead Zone of test2
    //console.log( 'guessMe: ', test2 ); <- This would give an error
    let test2 = 2;
    console.log( 'test2: ', test2 );// C: test2 is 2
}
console.log( 'test2: ', test2 );// D: test2 is 1