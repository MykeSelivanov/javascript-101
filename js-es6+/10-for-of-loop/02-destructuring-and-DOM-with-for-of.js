// If your elements are objects, it is possible to use destructuring inside the for-of loop:
let flights = [
    { source: 'Dublin', destination: 'Warsaw' },
    { source: 'New York', destination: 'Phoenix' }
];

for (let { source, destination } of flights) {
    console.log(source, destination);
}

// When you use destructuring, you can omit the fields you are not interested in.
for (let { source } of flights) {
    console.log(source);
}

// It is possible to use the for-of loop on a NodeList. 
// The below snippet changes the default font color of each div on a website randomly. 
let divs = document.querySelectorAll('div');
for (let div of divs) {
    let rand = Math.floor(Math.random() * 3);
    div.style.color = ['#990000', '#009900', '#000099'][rand];
}