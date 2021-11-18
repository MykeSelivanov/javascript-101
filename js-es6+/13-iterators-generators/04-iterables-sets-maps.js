// The entries method is defined on sets and maps. You can also use the keys and values method on a 
// set or map to create an iterator/iterable of the keys or values. 

let colors = new Set(['red', 'yellow', 'green']);
let horses = new Map([
    [5, 'QuickBucks'],
    [8, 'Chocolate'],
    [3, 'Filippone']
]);

console.log(colors.entries());
//> SetIterator {["red", "red"], ["yellow", "yellow"], ["green", "green"]}

console.log('\n')
console.log(colors.keys());
//> SetIterator {"red", "yellow", "green"}

console.log(colors.values());
//> SetIterator {"red", "yellow", "green"}

console.log(horses.entries());
//> MapIterator {[5, "QuickBucks"], [8, "Chocolate"], [3, "Filippone"]}

console.log(horses.keys());
//> MapIterator {5, 8, 3}

console.log(horses.values());
//> MapIterator {"QuickBucks", "Chocolate", "Filippone"}