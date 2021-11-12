// Weak maps have object keys, and arbitrary values. When all strong references to a key are removed, 
// the key is garbage collected, and the key-value pair is removed from the weak map.

// Only the keys of weak maps are weak. Values placed in a weak map have strong references in the map.

let firstElement = { order: 1 }, secondElement = { order: 2 };
let wm = new WeakMap();

wm.set(firstElement, 1);
wm.set(secondElement, {});

console.log(wm.get(secondElement));
//> {}

delete secondElement;
// secondElement is removed from the weak map

// As soon as a key of the weak map is not referenced anymore, the key-value pair is removed from the weak map.