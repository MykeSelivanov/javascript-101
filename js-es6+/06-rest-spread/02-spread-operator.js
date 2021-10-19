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