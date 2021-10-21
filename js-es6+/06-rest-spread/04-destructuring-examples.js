// Make a shallow copy of an array of any length in one destructuring assignment
let originalArray = [1, 2, 3, 4, 5];
console.log(`originalArray`, originalArray);
let [...clonedArray] = originalArray;
console.log(`clonedArray`, clonedArray);

