function smallestCommons(arr) {
  let common = 0;
  let num1;
  let num2;
  let numArr = [];

  arr[0] < arr[1] ? (num1 = arr[0], num2 = arr[1]) : (num2 = arr[0], num1 = arr[1]); 

  for (let i = num1; i <= num2; i++) {
    numArr.push(i);
  }

  let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  let factorArr = [];
  let div = true;
  let j = 0;

  while(div || j < prime.length){
    div = false;    
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] % prime[j] === 0) {
          numArr[i] = numArr[i] / prime[j];         
          div = true;
      }   
    }
    
    if(div){   
      factorArr.push(prime[j]);
    } else {
      j++;
    } 
  }

  common = factorArr[0];
  for (let i = 1; i < factorArr.length; i++) {
      common *= factorArr[i];      
  }

  return common;
}
