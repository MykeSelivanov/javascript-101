// A tail call is a subroutine call performed as the final action of a procedure.
// It is important to understand that ES6 does not introduce new syntax for tail call optimization. 
// It is just a different structure of code to make sure that it is efficient.

// Fibonacci using recursion
function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
// Notice that none of these have any clue that they are actually a part of a bigger process to calculate fib(5). 
// For instance, no fib(1) knows that it will be added to fib(0) and be used to calculate fib(5) at the end.

// How do we know that fib(3) has to be added to fib(2) to make fib(4), or fib(2) has to be added to fib(1) to make fib(3)?
//  Where do we keep this information? All this information is in the call stack.

// If at any point during the process, we were to pause and continue the process in a new environment with a clean stack, 
// we would be unable to calculate fib(5) because the call stack has been wiped clean.

// Think of a recursive process as a series of deferred operations, where there is information hidden to each recursive 
// call - that hidden information is in the call stack.

// Fibonacci with tail call optimization
function fib(n, a, b) {
    if (n === 0) {
        return b;
    } else {
        return fib(n - 1, a + b, a);
    }
};