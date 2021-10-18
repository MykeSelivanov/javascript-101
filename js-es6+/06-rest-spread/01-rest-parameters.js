// ES5
(
    function () {
        console.log(arguments);
    }
)(1, 'Second', 3);

// ES6
((...args) => // using rest parameters
{
    console.log(args);
}
)(1, 'Second', 3);
// Note that the argument list containing the rest parameter is placed in parentheses. 
// This is mandatory, as ...args is equivalent to arg1, arg2, arg3.

// The rest parameter has to be the last argument of a function. As a consequence, there can only be one rest parameter in a function. 
// If the rest parameter is not the last argument of the argument list of a function, an error is thrown.