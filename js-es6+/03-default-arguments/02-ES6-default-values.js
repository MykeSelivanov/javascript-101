// ES6 supports default values. Whenever an argument is not given, the default value is substituted.

function addCalendarEntry( 
    event, 
    date = new Date().getTime(), 
    len = 60, 
    timeout = 1000 ) {

    return len;
}
var add=addCalendarEntry( 'meeting' );
console.log(add); //outputs the default value set earlier

// Suppose function f is given with two arguments, a and b.
function f( a = a0, b = b0 ) { 
    //function logic 
};

// When a and b are not supplied, the above function is equivalent to
function f() {
    let a = a0;
    let b = b0;
    // function logic
};

// Default arguments can have arbitrary types and values.
// All considerations for let declarations including the temporal dead zone hold. 
// a0 and b0 can be any JavaScript expressions, in fact, b0 may even be a function of a. 
// However, a0 cannot be a function of b, as b is declared later.

// USE DEFAULT ARGUMENTS AT THE END OF THE ARGUMENT LIST AS OPTIONAL ARGUMENTS. DOCUMENT THEIR DEFAUL VALUES

// THE ARGUMENTS ARRAY IS NOT AFFECTED
// We often used the arguments array to handle a variable number of arguments:
function printArgs() {
    console.log( arguments );
}
printArgs( 'first', 'second' );

// Bear in mind that the arguments array is not affected by the default parameter values in any way.
function printArgs( first = 'No arguments' ) {
    console.log( arguments );
}
printArgs();

// Ex1
// Write a function that executes a callback function after a given delay in milliseconds. 
// The default value of delay is one second.
function executeCallback( callback, delay = 1000 ) {
	console.log('Delay: ' + delay);
  setTimeout( callback, delay );
}
executeCallback( () => console.log('Done'));

// Ex2
// printComment has a default value that’s initially 1, and is incremented by 1 after each call.

// We create a new variable lineNumber which is initialized to 1. 
// This way, we are updating a variable rather than changing the default argument of the printComment function each time.
let lineNumber = 1;
function printComment( comment, line = lineNumber++ ) {
  console.log( line, comment );
}
for (var i = 1; i <= 5; i++)
  printComment('I should be lineNumber ' + i);

  // Ex3
function argList( productName, price = 100 ) {
    console.log( arguments.length ); //(A)
    console.log( productName === arguments[0] ); //(B)
    console.log( price === arguments[1] ); //(C)
};
argList( 'Krill Oil Capsules' );

// A - 1
// // Even though we have specified that our function can have 2 arguments, we’ve already learned that it isn’t necessary 
// to provide both. In argList( 'Krill Oil Capsules' );, we specify the first argument. 
// Hence, the length of our arguments array is 1.

// B - true
// Here, we are simply checking whether or not the productName argument exists. 
// Since, we passed 'Krill Oil Capsules' into the function, the console will display true for this statement.

// C - false
// This is the interesting part. The price argument has a default value of 100. 
// However, it is not considered to be an argument which we have passed into the function. 
// As a result, the comparative statement price === arguments[1] will return false because arguments[1] is undefined.
