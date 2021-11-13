// Ex1
// Write a function that removes all the duplicates from an array

let removeDuplicatesFromArray = function (arr) {
    return [...new Set(arr)];
}
//OR
let removeDuplicatesFromArray2 = arr => [...new Set(arr)];