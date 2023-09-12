// Cracking the Coding Interview Question 1.1
// Is Unique: Implement an algorithm to determing if a string has all unique characters. What if you cannot use additional data structures?

// const isUnique = (string) => {
//     const chars = new Set();
//     for (let char of string) {
//         if (chars.has(char)) {
//             return false;
//         } 
//         chars.add(char);
//     }
//     return true;
// }

// const isUnique = (string) => {
//     const sorted = string.split('').sort().join('');
//     for (let i = 1; i < sorted.length; i++) {
//         if (sorted[i] === sorted[i -1]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isUnique("hello"));
// console.log(isUnique("done"));
// console.log(isUnique("free"));
// console.log(isUnique("nice"));

// Cracking the Coding Interview Question 1.2
// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

// function checkPermutation(string1, string2) {
//     if (string1.length !== string2.length) return false;
//     if (string1.split('').sort().join('') === string2.split('').sort().join('')) {
//         return true;
//     }
//     return false;
// }

// console.log(checkPermutation("hello", "bye"));
// console.log(checkPermutation("dog", "god"));
// console.log(checkPermutation("free", "furry"));
// console.log(checkPermutation("nice", "bad"));