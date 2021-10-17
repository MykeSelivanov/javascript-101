// Swap 2 variables with destructuring
let text1 = 'swap';
let text2 = 'me';
[text1, text2] = [text2, text1];

// Complete the function that calculates the nth fibonacci number in the sequence with one destructuring assignment
function fib(n) {
    let fibCurrent = 1;
    let fibLast = 0;

    if (n < 0) return NaN;
    if (n <= 1) return n;

    for (let fibIndex = 1; fibIndex < n; ++fibIndex) {
        [fibCurrent, fibLast] = [fibCurrent + fibLast, fibCurrent];
    }

    return fibCurrent;
}

// Create one destructuring expression that declares exactly one variable to retrieve x.A[2]. 
// Return the value in a new variable called A_2.
let x = { A: ['t', 'e', 's', 't'] };
let { A: [, , A_2] } = x;