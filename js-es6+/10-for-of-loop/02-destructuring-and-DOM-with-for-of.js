// If your elements are objects, it is possible to use destructuring inside the for-of loop:
let flights = [
    { source: 'Dublin', destination: 'Warsaw' },
    { source: 'New York', destination: 'Phoenix' }
];

for (let { source, destination } of flights) {
    console.log(source, destination);
}

