// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let odds = array.filter(e => e % 2 !== 0); // filter original array into new array of odd numbers
    let sortOdds = odds.sort((a, b) => a - b); // sort array of odds
    return array.map(e => e %2 !== 0 ? sortOdds.shift() : e)  // map over original array and replace odd nums with correctly ordered odd num
  }