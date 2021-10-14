// Static methods are operations defined on a class. 
// These methods can only be referenced from the class itself, not from objects.

class C {
    static create() { return new C(); }
    constructor()   { console.log( 'Accessing constructor from the class'); }
}

var c = C.create();
//> constructor - ''Accessing constructor from the class'
// c.create(); //this will give an error