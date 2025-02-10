function sum(numbers) {
  if (numbers.length === 0) return 0;

  const shifted = numbers.shift();
  return shifted + sum(numbers);
}

console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(sum([5, 2, 4, 8])); // 19
console.log(sum([1, 10, 100, 1000])); // 1111
