// Declarations with const are block scoped, they have to be initialized, and their value cannot be changed after initialization.

const PI = 3.1415;
PI = 3.14; // TypeError: Assignment to constant variable.

// Not initializing a constant also throws an error:

const TEST; // const TEST=8; won't give an error

// Const may also have a temporal dead zone.

// temporal dead zone of NUM
// NUM cannot be accessed here
const NUM = 3.1415;
// NUM is 3.1415 and its value is final
// NUM can be accessed here