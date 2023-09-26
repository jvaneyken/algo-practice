// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])        should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
// If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

const maxSequence = (arr) => {
    if (arr.length === 0) return 0;
    let maxSum = arr[0];
    let currentSum = 0;
    
    for (let num of arr) {
      if (currentSum < 0) {
        currentSum = 0;
      }
      currentSum += num;
      maxSum = Math.max(maxSum, currentSum);
    }
    return Math.max(maxSum, 0);
  }

//   var maxSequence = function(arr){
//     var min = 0, ans = 0, i, sum = 0;
//     for (i = 0; i < arr.length; ++i) {
//       sum += arr[i];
//       min = Math.min(sum, min);
//       ans = Math.max(ans, sum - min);
//     }
//     return ans;
//   }

// var maxSequence = function(arr){
//     var currentSum = 0;
//     return arr.reduce(function(maxSum, number){
//         currentSum = Math.max(currentSum+number, 0);
//         return Math.max(currentSum, maxSum);
//     }, 0);
// }