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