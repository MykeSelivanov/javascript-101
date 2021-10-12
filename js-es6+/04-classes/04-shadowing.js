// Methods of the parent class can be redefined in the child class. This redefinition of the function using the same name 
// is called shadowing.

// The child class SuperUser has redefined the function hasAccess

class User {
    constructor() {
        this.accessMatrix = {};
    }
    hasAccess(page) {
        return this.accessMatrix[page];
    }
}

class SuperUser extends User {
    hasAccess(page) {
        return true;
    }
}

var su = new SuperUser();
su.hasAccess('ADMIN_DASHBOARD');