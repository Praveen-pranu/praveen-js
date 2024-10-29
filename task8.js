function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function displayFibonacciReverse(n) {
    let fibonacciSeries = generateFibonacci(n);
     let reversedSeries = fibonacciSeries.reverse();
    console.log("Fibonacci Series in reverse order:");
    console.log(reversedSeries.join(', '));
    
}

let n = 10;

displayFibonacciReverse(n);