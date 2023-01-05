const isPrime = n => {
    if(n === 0 || n === 1) return false;
    for(let i = 2; i  <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(5)); // true
console.log(isPrime(9)); // false