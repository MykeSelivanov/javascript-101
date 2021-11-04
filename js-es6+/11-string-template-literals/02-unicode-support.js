// ES5 handles string operations in two-byte chunks. As a result, handling Unicode strings with a mixture of 
// two and four byte long codes often gets confusing. Characters of Unicode strings were often not printable 
// on their own, and in general, any string operation required extra care.

// We still calculate the length of a string by dividing the number of bytes allocated by a string by two. 
// However, there are some updates in ES6 that make String handling more user-friendly.

// codePointAt(n) returns the code of the character at the nth position regardless of whether it is a 
// two byte or a four-byte long character. If n points at the second half of a four-byte Unicode character, 
// only the code of the second half is returned
// In ES6, it is possible to define four byte long Unicode characters with their code:
console.log('\u{1f600}')                            // becomes an emoji
console.log('\u{1f600}'.length)                     // is 2
console.log('\u{1f600}'.charCodeAt(0))              // is 55357
console.log('\u{1f600}'.codePointAt(0))             // is 128512
console.log('\u{1f600}'.charCodeAt(1))              // is 56832
console.log('\u{1f600}'.codePointAt(1))             // is 56832
console.log('\u{1f600}'.startsWith('\u{1f600}'[0])) // is true

// Note that the startsWith, endsWith, includes methods interpret the result in two-byte chunks.

// The for-of loop interprets three and four byte long characters as one unit, scoring another convenience point for ES6.
let str = '\u{1f600}\u{00fa}é';

for (const ch of str) {
    console.log(ch);
}

// - The for-of loop prints three characters, an emoji, ú, and é.
// - [...str] spreads str character by character
// - Even though [...str] has three elements, the length of the str string is 4. This is because the length of [...str][0] is 2.