function printPrime(value) {
    var primes = [];
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    console.log(limit);
    for(var i = 2; i < limit; i++) {
        console.log(i);
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                console.log(j);
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            console.log(i + " " + primes[i]);
        }
    }
}

printPrime(10);
