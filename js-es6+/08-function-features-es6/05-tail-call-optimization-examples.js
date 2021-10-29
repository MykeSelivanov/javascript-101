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
