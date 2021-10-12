// Calling super in a constructor should happen before accessing this. As a rule of thumb:
// Call super as the first thing in a constructor of a class defined with extends.

// If you fail to call super, an error will be thrown. If you don’t define a constructor in a 
// class defined with extends, one will automatically be created for you, calling super with the argument list of the constructor.

