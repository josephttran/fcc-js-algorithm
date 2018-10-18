function binaryAgent(binStr) {
  let newArr = binStr.split(" ");
  let newStr = '';
  
  newArr.forEach(ele => {
    newStr += String.fromCharCode(parseInt(ele, 2));
  })

  return newStr;
}
