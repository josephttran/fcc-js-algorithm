function truthCheck(collection, pre) {
  let truthy = ["", 0, null, undefined];

  for (let i = 0; i < collection.length; i++) {
    if (!collection[i].hasOwnProperty(pre)) {
      return false;
    }
    
    if (collection[i].hasOwnProperty(pre)) {
      if(truthy.indexOf(collection[i][pre]) > -1){
        return false;
      }
    }

    // if not equal then value is NaN
    if (collection[i][pre] === collection[i][pre]) {
  
    } else {
      return false;
    }
  }

  return true;
}
