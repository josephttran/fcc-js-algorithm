function dropElements(arr, func) {
  let newArr = [...arr];

  for (let i = 0; i < arr.length; i++){

    if(!func(arr[i])){
      newArr.splice(0, 1);
    } else {
      break;
    }
  }
  return newArr;
}
