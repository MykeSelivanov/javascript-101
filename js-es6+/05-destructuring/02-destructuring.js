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

console.log(user)