//Sum All Primes

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number){
      for (let i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
          // return true if it is divisible by any number that is not itself.
             return false;
          }
       }
       // if it passes the for loops conditions it is a prime
      return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1){
    return 0;
  }
  // Check if your number is not prime
  if(isPrime(num) === false){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}



sumPrimes(10);
*/

/*
Another way to solve This

function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes(10);

*/
