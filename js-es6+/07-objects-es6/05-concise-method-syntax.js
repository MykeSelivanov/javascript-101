let shapeName = 'Rectangle', a = 5, b = 3;

let shape = {
    shapeName,
    a,
    b,
    logArea() { console.log('Area: ' + (a * b)); },
    id: 0
};

shape.logArea();

// in ES5, we would have to write : function between logArea and () to make the same declaration work. 
// This syntax is called the concise method syntax.