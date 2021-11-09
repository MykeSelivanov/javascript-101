// Maps represent key-value pairs, similar to objects.

// You may be wondering why we need a map data structure if objects can also be used as maps. 
// The answer is simple: maps can have keys of any type, and the keys are not converted to strings. 
// Therefore, 0 and '0' are two different, and valid keys.

// Objects are also valid keys for maps. They are not converted to '[object Object]'. 
// Note though, that objects are reference types. Therefore, using the {} object literal twice as keys 
// will result in two different entries in the map.

// We can build maps in multiple ways. We can either use the set method to add values to the map or pass an 
// array of key-value pairs to the map constructor.

let horses = new Map();

horses.set(8, 'Chocolate');
horses.set(3, 'Filippone');
console.log(horses);

