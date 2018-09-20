function spinalCase(str) {
  let newStr = str;
  let myRegex1 = /([a-z])([A-Z])/g;
  let myRegex2 = /[\_\s]/g;

  newStr = newStr.replace(myRegex1, '$1 $2');
  newStr = newStr.replace(myRegex2, '-');
  
  newStr = newStr.toLowerCase();

  return newStr;
}