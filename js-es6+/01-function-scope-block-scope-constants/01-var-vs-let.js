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