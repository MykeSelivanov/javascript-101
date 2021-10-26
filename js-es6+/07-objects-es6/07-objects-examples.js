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