// There are two types of memory available to you: the stack and the heap. 
// The heap is used for dynamic memory allocation, while the stack is used for static memory allocation. 
// Accessing the stack is very fast, but the size of the stack is fixed.

// A stack frame is created for the global scope. Then, for each function call, another stack frame is added to the top. 
// These frames stack on top of each other.

// When executing JavaScript code, you get a stack with limited size to work with.

// Regardless of the browser, iterating from zero to a million in a for loop is an easy task.
console.time('for loop');
let sum = 0;
for (let i = 0; i < 1000000; ++i) {
    sum += i;
}
console.timeEnd('for loop');
// for loop: 18.749ms

// Doing the same iteration as a recursive call is an arduous task that most browsers are not able to solve 
// because of the stack limit. Execution is fast, but the stack limit will not make it possible to execute a million calls.
function sumToN(n) {
    if (n <= 1) return n;
    return n + sumToN(n - 1);
};
console.time('recursion');
console.log(sumToN(1000000));
console.timeEnd('recursion');
// RangeError: Maximum call stack size exceeded

// How the following program is executed on the stack:
function sumToN(n) {
    if (n <= 1) return n;
    return n + sumToN(n - 1);
};
console.log(sumToN(2));

// Initially, a reference to the sumToN function is created on the global stack frame.

// - Once sumToN(2) is called, another stack frame is created, containing the value of n, the expected return value, 
// and a reference to sumToN.

// - Once sumToN(1) is called, another stack frame is created with another value of n, the expected return value, 
// and a reference to sumToN.

// - Once sumToN returns 1, the last stack frame is destroyed.

// - Once sumToN(2) is computed, the stack frame created in step (2) is destroyed.

// - Beyond a five digit stack limit, execution stops, and a JavaScript error is thrown. 
// We will combat this behavior with tail call optimization.