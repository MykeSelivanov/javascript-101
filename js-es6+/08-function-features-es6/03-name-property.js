// The name of a function can be retrieved using the name property of a function.
let guessMyName = function fName() { };
let fName2 = function () { };
let guessMyProperty = {
    prop: 1,
    methodName() { },
    get myProperty() {
        return this.prop;
    },
    set myProperty(prop) {
        this.prop = prop;
    }
};

console.log(guessMyName.name);
//> "fName"
console.log(fName2.name);
//> "fName2"
console.log(guessMyProperty.methodName.name);
//> "methodName"
console.log(guessMyProperty.methodName.bind(this).name);
//> "bound methodName"