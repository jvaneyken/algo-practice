const oneAway = (string1, string2) => {
    if (((string2.length + 1) > (string1.length)) || ((string2.length - 1) < (string1.length))) {
        return false
    } else {

        return true;
    }
}

console.log(oneAway("paleasdfasdfa", "ple")) // ->
console.log(oneAway("pales", "pale")) // -> 
console.log(oneAway("pale", 'bale')) // -> 
console.log(oneAway("pale", "bake")) // -> 
console.log(oneAway("paler", "ple")) // -> 