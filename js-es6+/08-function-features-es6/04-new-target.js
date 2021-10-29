// You can retrieve the constructor function of an object inside the constructor by using new.target
function MyConstructor() {
    console.log(new.target === MyConstructor, typeof new.target);
    if (typeof new.target === 'function') {
        console.log(new.target.name);
    }
}

new MyConstructor();
//> true "function"
//> MyConstructor

MyConstructor();
//> false "undefined"

// Whenever you call a constructor with the new operator, new.target contains a reference to the constructor. 
// Whenever you call a constructor without the new operator, new.target will be undefined.