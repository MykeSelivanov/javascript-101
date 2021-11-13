// Ex1
// Write a function that removes all the duplicates from an array

let removeDuplicatesFromArray = function (arr) {
    return [...new Set(arr)];
}
//OR
let removeDuplicatesFromArray2 = arr => [...new Set(arr)];

// Ex2
// Make the property _width private for the below class using weak maps. Make sure the property is unique 
// for each created object, and the property cannot be accessed from outside instances of the class.
// class Square {
//     constructor(width) {
//         this._width = width;
//     }
//     get area() {
//         return this._width * this._width;
//     }
// }

let Square = (function () {
    let _width = new WeakMap();
    class Square {
        constructor(width) {
            _width.set(this, width);
        }
        get area() {
            let width = _width.get(this);
            return width * width;
        }
    }
    return Square;
})();

// Ex3
// Implement the union, intersection, and difference operations for sets.
let union = (set1, set2) => new Set([...set1, ...set2]);
let intersection = (set1, set2) => new Set([...set1].filter((elem) => set2.has(elem)));
let difference = (set1, set2) => new Set([...set1].filter((elem) => !set2.has(elem)));
