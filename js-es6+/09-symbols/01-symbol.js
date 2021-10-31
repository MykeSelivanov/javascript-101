// ES6 introduces a new primitive type for JavaScript: Symbols. 
// The global Symbol() function creates a JavaScript symbol. 
// Each time the Symbol() function is called, a new unique symbol is returned.
let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(symbol1 === symbol2);
//> false

// Symbols don’t have a literal value. All you should know about the value of a symbol is that each symbol 
// is treated as a unique value. In other words, no two symbols are equal.
console.log(typeof symbol1);
//> "symbol"

// Symbols are useful, because they act as unique object keys.
let myObject = {
    publicProperty: 'Value of myObject ["publicProperty"]'
};

myObject[symbol1] = 'Value of myObject [symbol1]';
myObject[symbol2] = 'value of myObject [symbol2]';

console.log(myObject);
//> Object
//>    publicProperty: "Value of myObject[ "publicProperty" ]"
//>    Symbol(): "Value of myObject[ symbol1 ]"
//>    Symbol(): "value of myObject[ symbol2 ]"
//>    __proto__: Object

console.log(myObject[symbol1]);
//> Value of myObject[ symbol1 ]

// When console logging myObject inside the Chrome Developer Tools, you can see that both symbol properties are stored in the object. 
// The literal "Symbol()" is the return value of the toString() method called on the symbol. 
// This value denotes the presence of a symbol key in the console. 
// We can retrieve the corresponding values if we have access to the right symbol.

// In some environments such as node and Microsoft Edge console, Symbol keys are not logged.
// In order to see reveal the Symbol keys in Node env, you need to set showHidden flag to true
console.dir(myObject, { showHidden: true });