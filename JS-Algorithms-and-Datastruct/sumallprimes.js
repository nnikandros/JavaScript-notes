function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(7));

// console.log([...Array(10).keys()]);

// console.log();

function sumPrimes(num) {
  const arrayofnumbers = [...Array(num).keys()].map((i) => i + 1);
  const filtered = arrayofnumbers.filter(isPrime);
  return filtered.reduce((a, b) => a + b);
}

console.log(sumPrimes(50));
