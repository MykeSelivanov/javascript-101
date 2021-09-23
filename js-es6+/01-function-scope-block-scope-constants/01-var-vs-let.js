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

// Var age is the temporal dead zone
function logAge() {
    console.log( 'age:', age ); // Temporal dead zone
    var age = 25;
}
logAge();
