// You can retrieve the constructor function of an object inside the constructor by using new.target
function MyConstructor() {
    console.log(new.target === MyConstructor, typeof new.target);
    if (typeof new.target === 'function') {
        console.log(new.target.name);
    }
}