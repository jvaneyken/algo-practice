// Write a method to replace all spaces in a string with '%20'.
// You may assume that the new string has sufficient space at the end to hold the additional
//  characters, and that you are given the "true" length of the string. 

// const URLify = (string) => {
//     let newString = "";
//     for (let char of string) {
//         if (char !== " ") {
//             newString += char;
//         } else {
//             newString += '%20'
//         }
//     }
//     return newString;
// }

const URLify = (string) => {
    const strArr = string.split('');
    const newStr = strArr.map(char => {
        if (char === " ") {
            return '%20';
        } else {
            return char;
        }
    }).join('')
    return newStr;
}

console.log(URLify("h ll "));