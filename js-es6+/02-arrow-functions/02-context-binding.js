// Whenever you want to use the lexical value of this coming from outside the scope of the function, use arrow functions.

// Equivalence transformation for fat arrows is the following:
// ES2015
// ( ARGUMENTS ) => VALUE;

// ES5 
// function( ARGUMENTS ) { return VALUE; }.bind( this );

// For blocks
// ES2015
// ( ARGUMENTS ) => {
//     // ...
// };

// ES5 
// function( ARGUMENTS ) { 
//     // ...
// }.bind( this );

// In constructor functions and prototype extensions, it does not make sense to use fat arrows.

// Examples
