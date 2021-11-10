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