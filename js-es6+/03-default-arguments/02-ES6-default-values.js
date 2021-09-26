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

