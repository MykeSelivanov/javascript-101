// Ex1
// Suppose an array of firstName, email, basketValue triples are given. Create ONE JavaScript expression that puts
//  a default value of '-' and 0 to the firstName or basketValue fields respectively, whenever the firstName or the 
//  basketValue keys are missing.

// the baskets object is randomly generated
console.log("baskets: ");
console.log(baskets);
let newBaskets = baskets.map(item => Object.assign(
    { firstName: '-', basketValue: 0 },
    item
));

// Explanation
// When it comes to transforming the value of an array, we usually use the map method.
// The shortest way of writing a map function is through using the arrow syntax. Inside the map, 
// we have to fill in the default values in item. If a key is already given in item, it takes precedence. 
// We will use Object.assign. For each element of the basket array, we will create an object of default values, 
// and we extend it with the element of the array, mixing in all the properties. If a key exists in both objects, 
// the value in item is kept.