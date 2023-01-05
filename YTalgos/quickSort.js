const quickSort = arr => {
    if(arr.length < 2) return arr;
    const leftArray = [];
    const rightArray = [];
    const pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) leftArray.push(arr[i]);
        if (arr[i] > pivot) rightArray.push(arr[i]);
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort([8, 20,-2, 4, -6])); // [-6, -2, 4, 8, 20]