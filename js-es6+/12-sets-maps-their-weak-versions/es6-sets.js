// A Set data structure in ES6 is an ORDERED list of unique elements. Here are some set functions and their usage:
// Set - constructor - creates a set
// add - method - adds elements to the set
// size - property - check size of the set
// has - method - checks if an element is a member of the set
// delete - method - remove a value from a set

let colors = new Set();

colors.add('red');
colors.add('green');
colors.add('red');   // duplicate elements are added only once
console.log(colors);
//> Set {"red", "green"}

console.log('Size: ' + colors.size);
//> 2

console.log('has green: ' + colors.has('green') + '\nhas blue: ' + colors.has('blue'));
//> true false

console.log('Before deleting: ')
console.log(colors);
colors.delete('green')
//> true
colors.delete('green')
//> false

console.log('\nAfter deleting: ')
console.log(colors);