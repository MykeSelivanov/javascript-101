// The for-of loop works for any JavaScript iterable object. 

// for in loop
let message = 'hello';

for (let i in message) {
    console.log(message[i]);
}

// Often, you need message[i] inside the loop block, and not i. Therefore, it makes perfect sense to use a loop 
// that gives us the value message[i] instead of i. This is what the for-of loop provides
// for of loop
let message = 'hello';

for (let ch of message) {
    console.log(ch);
}