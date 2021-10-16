// Destructuring objects and arrays in any depth is possible. We can also use default values. 
// Objects or arrays that don’t exist on the right become assigned to undefined on the left.

let user = {
    name: 'Ashley',
    email: 'ashley@ilovees2015.net',
    lessonsSeen: [2, 5, 6, 7, 9],
    nextLesson: 10
};

let {
    lessonsSeen: [
        first,
        second,
        third,
        fourth,
        fifth,
        sixth = null,
        seventh
    ],
    nextLesson: eighth
} = user;