function diffArray(arr1, arr2) {
  var newArr = [];
  let arrr1 = [...arr1];
  let arrr2 = [...arr2];
  
  for (let i = 0; i < arrr1.length; i++) {
    if (!arrr2.includes(arrr1[i])) {
      newArr.push(arrr1[i]);
    }
  }

  for (let i = 0; i < arrr2.length; i++) {
    if (!arrr1.includes(arrr2[i])) {
      newArr.push(arrr2[i]);
    }    
  }

  return newArr;
}
