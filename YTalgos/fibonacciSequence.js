const fibonacciSequence = n => {
    const fibonacciArray  = [0, 1];
    if(n === 0 || n === 1) return fibonacciArray.slice(0, n);

    for(let i = 0; i < (n - 2); i++) {
        fibonacciArray.push(fibonacciArray[ i ] + fibonacciArray[ i + 1 ]);
    }

    return fibonacciArray;
}

console.log(fibonacciSequence(0)); // [0]
console.log(fibonacciSequence(1)); // [0, 1]
console.log(fibonacciSequence(4)); // [0, 1, 1, 2]
console.log(fibonacciSequence(7)); // ]0, 1, 1, 2, 3, 5, 8]