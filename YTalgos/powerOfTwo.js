const isPowerOfTwo = n => {
    if(n < 1) return false;
    return (n & (n-1)) === 0;
    }

/*
const isPowerOfTwo = n => {
    for(let i = 0; i <= n / 2; i++) {
        if(Math.pow(2, i) === n) return true;
    }
    return false;
}
*/

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(24)); // false
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(64)); // true