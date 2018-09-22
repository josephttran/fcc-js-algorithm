function myReplace(str, before, after) {
  let newStr = str.split(" ");
  let afterStr = after.slice(0);
  let myRegex = /[A-Z]/;

  newStr.map((ele, i, arr) => {
    if (ele == before) {
      if (ele[0].match(myRegex)){        
        afterStr = after[0].toUpperCase() + afterStr.slice(1);
      }
      arr[i] = afterStr;
    }
  });
  return newStr.join(" ");
}
