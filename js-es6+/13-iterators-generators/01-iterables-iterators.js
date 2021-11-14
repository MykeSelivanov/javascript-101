// ES6 comes with the iterable protocol. The protocol defines the iterating behavior of JavaScript objects.
// An iterable object has an iterator method with the key Symbol.iterator. This method returns an iterator object.

let iterableObject = {
    [Symbol.iterator]() { return iteratorObject; }
};