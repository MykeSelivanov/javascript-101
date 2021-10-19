// ES5 - apply method
// Suppose you would like to write a method that returns the sum of its arguments. Let’s write this function in ES5:
function sumArgs() {
    var result = 0;
    for (var i = 0; i < arguments.length; ++i) {
        result += arguments[i];
    }
    return result;
}
console.log(sumArgs(1, 2, 3, 4, 5));

// When we know the parameters passed to a function, we have an easy job calling sumArgs. 
// However, sometimes it makes little to no sense to write down 100 parameters. 
// In other cases, the number of parameters is not known. This was when the apply method of JavaScript was used in ES5.
var arr = [];
for (var i = 0; i < 100; ++i) arr[i] = Math.random();
console.log("Sum:\t" + sumArgs.apply(null, arr));

// ES2015 - use the spread operator to call sumArgs in the same way as above. 
// The spread operator spreads the elements of an array, transforming them into a parameter list.
sumArgs(...arr);

// As opposed to rest parameters, there are no restrictions on the location of the Spread operator in the parameter list. 
// Therefore, the following call is also valid:
sumArgs(...arr, ...arr, 100);