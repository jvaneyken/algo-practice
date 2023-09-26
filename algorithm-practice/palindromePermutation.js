// Given a string, write a function to check if it is a permutation of a palindrome. 
// The palindrome does not need to be limited to just dictionary letters
// Example: 
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco cta", etc)

// const palindromePermutation = (string) => {
//     if (string.length === 0) return false;
//     const chars = {};
//     for (let char of string) {
//         if (char === " ") {
//             continue;
//         } else if (char in chars) {
//             chars[chars] += 1;
//         } else {
//             chars[chars] = 1;
//         }
//     }

//     let count = 0;
//     for (let char in chars) {
//         if (char === 1) {
//             count++;
//         } else if (char % 1 === 0) {
//             return false;
//         }
//     }
//     if (count > 1) return false;
//     return true;
// }

const palindromePermutation = (string) => {
    if (!string) return false;

    const chars = new Set();
    for (let char of string) {
        if (char !== " ") {
            if (chars.has(char)) {
                chars.delete(char)
            } else {
                chars.add(char);
            }
        }
    }
    return chars.size <= 1;
}

console.log(palindromePermutation("Tact Coa"))