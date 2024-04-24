// added memoized version of fibonnaci

const fibonacci = (number) => {
    if (number <= 2) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

const memoizedFibonacci = (number, memo = {}) => {
    if (number in memo) return memo[number];
    if (number <= 2) return 1;
    memo[number] = memoizedFibonacci(number - 1, memo) + memoizedFibonacci(number - 2, memo);
    return memo[number];
}

console.log(fibonacci(10), "fibonacci");
console.log(fibonacci(20), "fibonacci");
console.log(fibonacci(5), "fibonacci");
console.log(fibonacci(40), "fibonacci");

console.log(memoizedFibonacci(10), "memoized fibonacci");
console.log(memoizedFibonacci(20), "memoized fibonacci");
console.log(memoizedFibonacci(5), "memoized fibonacci");
console.log(memoizedFibonacci(40), "memoized fibonacci");