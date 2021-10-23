// In the scope where an object is created, it is possible to use other variables for initialization.
let shapeName = 'Rectangle', a = 5, b = 3;

let shape = { shapeName, a, b, id: 0 };

console.log( shape );
// { shapeName: "Rectangle", a: 5, b: 3, id: 0 }