// There are three types of edits that can be performed on strings: insert a characer, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

const oneAway = (string1, string2) => {
   if (string1.length === string2.length) {
    return oneEditReplace(string1, string2);
   } else if ((string1.length + 1) === string2.length) {
    return oneEditInsert(string1, string2);
   } else if ((string1.length - 1) === string2.length) {
    return oneEditInsert(string2, string1);
   }
   return false
}

const oneEditReplace = (string1, string2) => {
    let foundDifference = false;
    for (let i = 0; i < string1.length; i++) {
        if (string1.charAt(i) !== string2.charAt(i)) {
            if (foundDifference) {
                return false;
            }
            foundDifference = true;
        }
    }
    return true; 
}

const oneEditInsert = (string1, string2) => {
    let index1 = 0;
    let index2 = 0;

    while(index2 < string2.length && index1 < string1.length) {
        if (string1.charAt(index1) !== string2.charAt(index2)) {
            if (index1 !== index2) {
                return false;
            }
            index2++
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}

console.log(oneAway("pale", "ple")) // -> true
console.log(oneAway("pales", "pale")) // -> true
console.log(oneAway("pale", 'bale')) // -> true
console.log(oneAway("pale", "bake")) // -> false
console.log(oneAway("paler", "ple")) // -> false