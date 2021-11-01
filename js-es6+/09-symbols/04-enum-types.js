// Enums allow you to define constants with semantic names and unique values. 
// Given that the values of symbols are different, they make excellent values for enumerated types.
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};
console.log(directions);