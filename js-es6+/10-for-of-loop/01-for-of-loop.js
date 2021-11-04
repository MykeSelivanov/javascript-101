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

// In ES5, three and four byte long characters are sometimes broken into 2-byte chunks.
let text = '\u{1F601}\u{1F43C}';
console.log('text: ', text);

for (let i in text) {
    console.log(text[i]);
};

console.log('-----');

for (let c of text) {
    console.log(c);
};

// Unlike the for-in loop, the for-of loop parses all Unicode characters properly, regardless of their size.