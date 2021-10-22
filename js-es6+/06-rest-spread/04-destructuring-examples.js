// Ex1
// Make a shallow copy of an array of any length in one destructuring assignment
let originalArray = [1, 2, 3, 4, 5];
console.log(`originalArray`, originalArray);
let [...clonedArray] = originalArray;
console.log(`clonedArray`, clonedArray);

// Ex2
// An array of five vectors of ['1', '2', '3', '4', '5'] is printed out as a table.
// The function f creates the array ['1', '2', '3', '4', '5']. In f().map( f ), only the length of f() matters, 
// as the values are thrown away by the map function. Each element of the f() array is mapped to the array 
// ['1', '2', '3', '4', '5'], making a 2 dimensional array of vectors ['1', '2', '3', '4', '5'].
let f = () => [..."12345"];
let A = f().map(f);
console.log(A);

// Ex3
// Create an 10x10 matrix of null values
let nullArray = () => new Array(10).fill(null);
let nullMatrix = nullArray().map(nullArray);
console.log(nullMatrix);

// Ex4
// Rewrite ES5 in ES6
// ES5
function sumArgs() {
    var result = 0;
    for (var i = 0; i < arguments.length; ++i) {
        result += arguments[i];
    }
    return result;
}

// ES6
// Solution #1: Using a function declaration
function sumArgs(...numbers) {
    return numbers.reduce((sum, num) => {
        return sum + num;
    }, 0);
}

// Solution #2: Using arrow functions with a function body and explicit return
let sumArgs = (...numbers) => {
    return numbers.reduce((sum, num) => {
        return sum + num;
    }, 0);
}


// Solution #3: Using arrow functions with implicit return
let sumArgs = (...numbers) =>
    numbers.reduce((sum, num) => {
        return sum + num;
    }, 0);
