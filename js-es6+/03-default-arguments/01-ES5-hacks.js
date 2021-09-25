// In some cases, function arguments are optional. For eg three arguments of addCalendarEntry are optional.:
function addCalendarEntry( event, date, len, timeout ) {
    date = typeof date === 'undefined' ? new Date().getTime() : date;
    len = typeof len === 'undefined' ? 60 : len;
    timeout = typeof timeout === 'undefined' ? 1000 : timeout;

    // ...
}
addCalendarEntry( 'meeting' );

// Three arguments of addCalendarEntry are optional.
// A popular shorthand for optional parameters in ES5 uses the || (logical or) operator. 
// You can make use of the shortcuts for logical operations.
function addCalendarEntry( event, date, len, timeout ) {
    date = date || new Date().getTime();
    len = len || 60;
    timeout = timeout || 1000;
    // ...
}
addCalendarEntry( 'meeting' );

// While this approach looks nice on paper, shortcuts are sometimes not flexible enough. 
// All false values are treated in the same way, including 0, '', false. 
// Sometimes, we may want to treat a 0 differently than an undefined indicating the absence of a value.


