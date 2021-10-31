// ES6 introduces a new primitive type for JavaScript: Symbols. 
// The global Symbol() function creates a JavaScript symbol. 
// Each time the Symbol() function is called, a new unique symbol is returned.
let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(symbol1 === symbol2);
//> false
