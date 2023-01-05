const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let m = Math.floor((left + right) / 2);
        if(arr[m] < target) left = m + 1;
        else if(arr[m] > target) r = m - 1;
        else return m;
    }
    return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1