// only works in sorted arrays

function binarySearch(target, nums) {
    // See if target appears in nums
  
    // We think of floorIndex and ceilingIndex as "walls" around
    // the possible positions of our target, so by -1 below we mean
    // to start our wall "to the left" of the 0th index
    // (we *don't* mean "the last index")
    let floorIndex = -1;
    let ceilingIndex = nums.length;
    // If there isn't at least 1 index between floor and ceiling,
    // we've run out of guesses and the number must not be present
    while (floorIndex + 1 < ceilingIndex) {
      // Find the index ~halfway between the floor and ceiling
      // We have to round down, to avoid getting a "half index"
      const distance = ceilingIndex - floorIndex;
      const halfDistance = Math.floor(distance / 2);
      const guessIndex = floorIndex + halfDistance;
  
      const guessValue = nums[guessIndex];
  
      if (guessValue === target) {
        return true;
      }
  
      if (guessValue > target) {
        // Target is to the left, so move ceiling to the left
        ceilingIndex = guessIndex;
      } else {
  
        // Target is to the right, so move floor to the right
        floorIndex = guessIndex;
      }
    }
  
    return false;
  }

  function binarySearch2(target, array) {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
      const middleIndex =  Math.floor((startIndex + endIndex) / 2);

      if (array[middleIndex] === target) return true;

      if (array[middleIndex] > target) {
        endIndex = middleIndex - 1
      } else {
        startIndex = middleIndex + 1
      }
    }
    return false;
  }

  let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

  console.log(binarySearch2(29, exampleArray));