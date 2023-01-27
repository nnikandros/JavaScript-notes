function isPrime(n) {
  // Corner case
  if (n <= 1) return false;

  // Check from 2 to n-1
  for (let i = 2; i < n; i++) if (n % i == 0) return false;

  return true;
}

const range = (n) => Array.from(Array(n), (_, i) => i);

console.log(range(10));

function addprimes(num) {
    let myarr = range(num);
    myarr.filter(isPrime)

}
