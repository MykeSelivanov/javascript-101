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