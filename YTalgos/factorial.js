const factorial = n => {
    let product = 1;
    if(n === 0) return product;
    for(let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

console.log(factorial(0)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120