console.log('forEach function:');
horses.forEach((value, key) => { console.log(value, key) });
//> Chocolate 8
//> Filippone 3

console.log('\nfor...of loop:');
for (let [key, value] of horses) {
    console.log(key, value);
}
//> 8 "Chocolate"
//> 3 "Filippone"

console.log('\nspread operators:');
console.log([...horses]);
//> [[8,"Chocolate"],[3,"Filippone"]]

// Notice the following behavior:

// - The destructuring operation in the for...of loop. Iterating a map results in a key-value pair.
// - The spread operator creates an enumeration of key-value pairs. These key-value pairs can be used to build an array.
// - The order of elements in the forEach method is value, key. The order in the for...of loop is key, value.