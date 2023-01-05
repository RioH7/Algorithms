const recursionFactorial = n => {
    if(n <= 1) return 1;
    return n * recursionFactorial(n-1);
}

console.log(recursionFactorial(0)); // 1
console.log(recursionFactorial(1)); // 1
console.log(recursionFactorial(4)); // 24
console.log(recursionFactorial(5)); // 120

