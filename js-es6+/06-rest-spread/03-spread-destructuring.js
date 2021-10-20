// array that contains the last four characters of another array
let notgood = 'not good'.split('');
let [, , , , ...good] = notgood;
console.log(good);
// ["g", "o", "o", "d"]