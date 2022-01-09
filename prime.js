function isPrime(num) {
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1;

}
  var array = [1, 5, 17, 25, 30 , 13 , 37,1,19,71];
  var primes = array.filter(isPrime);
  console.log(primes)