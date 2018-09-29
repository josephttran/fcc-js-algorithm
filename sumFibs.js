function sumFibs(num) {
  let firstNum = 1;
  let secondNum = 1;
  let nextNum = 0;
  let sumOddFib = 0;

  if (num < 0) {
    return;
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  sumOddFib = 2;
  nextNum = firstNum + secondNum;

  while ((nextNum + secondNum) <= num) {
    firstNum = secondNum;
    secondNum = nextNum;  
    nextNum = firstNum + secondNum;

    if (nextNum % 2 === 1) {
      sumOddFib += nextNum;
    }   
  }   

  return sumOddFib;
}
