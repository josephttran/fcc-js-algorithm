function sumPrimes(num) {
  let sumPrime = 0;
  let knownPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];  
  let prime = [];
  prime.length = num + 1;
 

  for (let i = 0; i < prime.length; i++) {
      prime[i] = true;
  } 


  for (let i = 0; i < knownPrime.length; i++) { 
    let p = knownPrime[i];

    if (prime[p]) {
      for (let j = p * p; j < prime.length; j += p) {      
        prime[j] = false;
      }
    }
 
  }  

  for (let i = 2; i < prime.length; i++) {
    if(prime[i]) {
      sumPrime += i;      
    }
  }  

  return sumPrime;
}

