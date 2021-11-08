// Sometimes we have to traverse all the elements of a set. This can be done in multiple ways:
// - forEach method,
// - for...of loop,
// - transforming a set into an array by using the spread operator

let moreColors = new Set(['red', 'blue', 'red', 'orange']);
console.log('forEach function:')
moreColors.forEach(value => { console.log(value) });
//> red
//> blue

console.log('\nfor...of loop:')
for (let value of moreColors) {
    console.log(value);
}
//> red
//> blue

console.log('\nspread operator:')
console.log([...moreColors]);
//> ["red", "blue"]