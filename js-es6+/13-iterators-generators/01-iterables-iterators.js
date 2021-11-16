// ES6 comes with the iterable protocol. The protocol defines the iterating behavior of JavaScript objects.
// An iterable object has an iterator method with the key Symbol.iterator. This method returns an iterator object.

let iterableObject = {
    [Symbol.iterator]() { return iteratorObject; }
};

// Symbol.iterator is a well-known symbol. We will now use Symbol.iterator to describe an iterable object. 
// Note that we are using this construct for the sake of understanding how iterators work. 
// Technically, you will hardly ever need Symbol.iterator in your code.

// An iterator object is a data structure that has a next method. When calling this method on the iterator, 
// it returns the next element, and a boolean signaling whether we reached the end of the iteration.

// Place this before iterableObject
let iteratorObject = {
    next() {
        return {
            done: true,
            value: null
        };
    }
};

// The return value of the next function has two keys:
// - done is treated as a boolean. When done is true, the iteration ends, and value is not considered in the iteration.
// - value is the upcoming value of the iteration. It is considered in the iteration if and only if done is false. 
// When done is true, value becomes the return value of the iterator.

// Example