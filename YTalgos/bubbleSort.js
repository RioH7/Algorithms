const bubbleSort = arr => {
    let swaps = true;
    while(swaps) {
        swaps = false;
        for(let i = 0; i <= arr.length - 2; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swaps = true;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]

