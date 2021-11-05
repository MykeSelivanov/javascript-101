// The purpose of template literals is to evaluate and insert values of JavaScript expressions in a template string
let x = 555; //<-notice 555
let evaluatedTemplate = `${x} === 555 is ${x === 555}`;
console.log(evaluatedTemplate);
// evaluatedTemplate becomes "555 === 555 is true"

let y = '555'; //<-notice '555'
evaluatedTemplate = `${y} === 555 is ${y === 555}`;
console.log(evaluatedTemplate);
// evaluatedTemplate becomes "555 === 555 is false"