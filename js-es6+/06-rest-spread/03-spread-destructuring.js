// array that contains the last four characters of another array
let notgood = 'not good'.split('');
let [, , , , ...good] = notgood;
console.log(good);
// ["g", "o", "o", "d"]

// If there are no elements left, the result of a destructuring assignment involving a spread operator is [].
let notgood = 'not good'.split('');
let [, , , , , , , , , , , , , , , , ...empty] = notgood;
console.log(empty);

