const bubbleSort = (array) => {
    let isSorted = false;

    while(!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                isSorted = false;
            }
        }
    }
    return array;
}


console.log(bubbleSort([4, 2, 6, 3, 9]))
console.log(bubbleSort([5, 3, 18, 7, 9, 13, 4, 6, 5, 8]))