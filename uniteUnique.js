function uniteUnique(arr) {
  let uniqueArr = [];
  
  for (let i = 0; i < arguments.length; i ++) {
    let arr = arguments[i];
    for (let j = 0; j < arr.length; j++) {
      if (!uniqueArr.includes(arr[j])) {      
        uniqueArr.push(arr[j]);
      }
    }
  }
  
  return uniqueArr;
}
