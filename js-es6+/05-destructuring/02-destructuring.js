let user = {
    name: 'Ashley',
    email: 'ashley@ilovees2015.net',
    lessonsSeen: [2, 5, 6, 7, 9],
    nextLesson: 10
};

let { email, nextLesson } = user;
console.log(user);
// email becomes 'ashley@ilovees2015.net'
// nextLesson becomes 10

// Without this shorthand notation, our code will look like this:
let {
    email: email,
    nextLesson: nextLesson
} = user;

console.log(user);
// In this case, the above code is equivalent with the following ES5 assignments:
let email = user.email;
let nextLesson = user.nextLesson;

// Make sure you use the let keyword to initialize new variables. 
// You can destructure an object or an array only if all the variables inside have been declared.

// Destructuring is right-associative, i.e., it is evaluated from right to left. 
// L = M = R becomes L = R, which in turn becomes R after evaluation. 
// The side effect is that in M and L, variable assignments may take place on any depth.

let user2 = {email, nextLesson} = user;
console.log( user2 === user, user2.name ); // true, Ashley

// In the above example, {email, nextLesson} = user is evaluated. 
// The side effect of the evaluation is that email and nextLesson are assigned to "ashley@ilovees2015.net" and 10 respectively. 
// The value of the expression is user. Then user2 = user is evaluated, creating another handle 
// (or call it reference or pointer depending on your taste) for the object accessible via user.

let {name} = {email, nextLesson} = user;
console.log( name ); // Ashley