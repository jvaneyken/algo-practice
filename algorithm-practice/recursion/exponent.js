const exponent = (a, n) => {
    if (n === 1) {
        return a
    } else if (n % 2 === 0) {
        const result = exponent(a, n / 2);
        return result * result;
    } else if (n % 2 === 1) {
        const result = exponent(a, Math.floor(n / 2));
        return result * result * a;
    }
}

console.log(exponent(3, 6))
console.log(exponent(10, 3))
console.log(exponent(17, 10))