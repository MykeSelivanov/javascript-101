// Creating truly private properties and operations is feasible, but it’s not an obvious task in JavaScript like it is in Java

// Even though Symbols do not make attributes private, they can be used as a notation for private properties. 
// You can use symbols to separate the enumeration of public and private properties, and the notation also makes it clear.
const _width = Symbol('width');
class Square {
    constructor(width0) {
        this[_width] = width0;
    }
    getWidth() {
        return this[_width];
    }
}

// As long as you can hide the _width constant, you should be fine. One option to hide _width is to create a closure:
let Square = (function () {

    const _width = Symbol('width');

    return class {
        constructor(width0) {
            this[_width] = width0;
        }
        getWidth() {
            return this[_width];
        }
    }
})();

// The advantage of this approach is that it becomes intentionally harder to access the private _width value of our objects. 
// It is also evident which of our properties are intended to be public, and which private. 
// The solution is not bulletproof, but some developers do use this approach in favor of indicating privacy by starting a variable with an underscore.

// The drawbacks are also obvious:
// - By calling Object.getOwnPropertySymbols, we can get access to the symbol keys. Therefore, private fields are not truly private.
// - Developer experience is also worse, as they have to write more code. Accessing private properties is not as convenient as in Java or TypeScript for example.

// The question is not whether it is possible to simulate private fields in JavaScript. 
// The real question is whether you want to simulate them or not. Once you figure out that you don’t need
//  truly private fields for development, you can agree whether you use symbols, weak maps (covered later),
//   closures, or a simple underscore prefix in front of your variables.