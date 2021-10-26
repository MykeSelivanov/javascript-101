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

// Ex2
// Create a prototype object with the following methods:
// - addToBasket( value ) adds value to the basket value,
// - clearBasket() sets the basket value to 0
// - getBasketValue() returns the basket value
// - pay() logs the message {getBasketValue()} has been paid, where {getBasketValue()} is the return value of the method 
// with the same name. We can pay for the same basket as many times as we’d like.
let basketProto = {
    value: 0,
    addToBasket(itemValue) {
        this.value += itemValue;
    },
    clearBasket() {
        this.value = 0;
    },
    getBasketValue() {
        return this.value;
    },
    pay() {
        console.log(this.getBasketValue() + ' has been paid');
    }
};

// // Ex3
// Create an object myBasket, and set its prototype to the object created in Exercise 2 (it has already been prepended to the given
//  code). Create an array field in myBasket, containing all the items that you purchase in the following format:
// { itemName: 'string', itemPrice: 9.99 }
// Redefine the addToBasket method such that it accepts an itemName and an itemPrice. 
// Call the addToBasket method in the prototype for the price administration, and store the itemName-itemPrice 
// data locally in your array. Make sure you modify the clearBasket method accordingly.
let myBasket = {
    items: [],
    addToBasket(itemName, itemPrice) {
        this.items.push({ itemName, itemPrice });
        super.addToBasket(itemPrice);
    },
    clearBasket() {
        this.items = [];
        super.clearBasket();
    }
};
Object.setPrototypeOf(myBasket, basketProto);