// Ex1
// Write a function that removes all the duplicates from an array

let removeDuplicatesFromArray = function (arr) {
    return [...new Set(arr)];
}
//OR
let removeDuplicatesFromArray2 = arr => [...new Set(arr)];

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