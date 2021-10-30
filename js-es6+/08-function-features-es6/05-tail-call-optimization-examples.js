// Ex1
// Implement a stack in ES6. In addition to a constructor, it should have a push(), pop(), 
// and a len() function that would return the number of elements in the stack.
class Stack {
    constructor() {
        this._elements = [];
    }
    get len() {
        return this._elements.length;
    }
    push(element) {
        this._elements.push(element);
    }
    pop() {
        return this._elements.pop();
    }
}

// Ex2
// Write a tail call optimized solution for the following Fibonacci function.
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// tail call optimization
function fib2(n, acc1 = 1, acc2 = 0) {
    if (n <= 0) return 0;
    if (n === 1) return acc1;
    return fib2(n - 1, acc1 + acc2, acc1);
}

// Explanaiton
// We have to create accumulator variables to create proper tail calls. 
// As we need to memorize the last two values of the sequence, we have to create two accumulators.

// The accumulators will keep track of the last two elements that are needed for constructing the current Fibonacci number. 
// Notice that the two accumulator values require us to create two separate exit conditions:

// - When calling fib2 with 0, the return value should be 0.
// - When calling fib2 with a positive integer, the final return value in the last fib2 call is acc1.