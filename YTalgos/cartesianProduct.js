//Find the cartesian product of 2 arrays
// Traverse each array and pair each elemt in the first with each element in the second array

// [1, 2], [3, 4]
// [[1, 3], [1, 4], [2, 3], [2, 4]]

//[1, 2], [3, 4, 5]
// [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

const cartesianProduct = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            console.log([arr1[i], arr2[j]] + ', ');
        }
    }
}

cartesianProduct([1, 2], [3, 4, 5]);