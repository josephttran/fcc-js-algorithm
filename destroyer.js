function removeVal(arr, val) {
  return arr.filter(ele => ele !== val);
}

function destroyer(arr) {
  let newArr = [...arr];

  for (let i = 1; i < arguments.length; i++) {
    newArr = removeVal(newArr, arguments[i]);
  }

  return newArr;
}
