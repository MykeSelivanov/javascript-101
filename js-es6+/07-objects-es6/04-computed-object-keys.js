// In JavaScript, objects are associative arrays (hashmaps) with String keys. 
// It is now possible to create an object property inside the object literal using the bracket notation:
let arr = [1, 2, 3, 4, 5];

let experimentObject = {
    [arr.length]: 2,
    [arr]: 1,
    [{}]: 3,
    arr
}
console.log(experimentObject);
// {
//     '5': 2,
//         '1,2,3,4,5': 1,
//             '[object Object]': 3,
//                 arr: [1, 2, 3, 4, 5]
// }

// We can use any of the above keys to retrieve the above values from experimentObject
console.log(experimentObject.arr)                  // [1,2,3,4,5]
console.log(experimentObject['arr'])             // [1,2,3,4,5]
console.log(experimentObject[arr])               // 1
console.log(experimentObject[arr.length])        // 2
console.log(experimentObject['[object Object]']) // 3
console.log(experimentObject[experimentObject])  // 3