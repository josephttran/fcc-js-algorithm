function sumAll(arr) {
  let sum = 0;
  let min = 0;
  let max = 0;

  arr[0] < arr[1] ? (min = arr[0], max = arr[1]) : (min = arr[1], max = arr[0]);

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

